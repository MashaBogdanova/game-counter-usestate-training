import React, {useState} from 'react';
import style from "./App.module.css";
import 'antd/dist/antd.css';
import {Button} from "antd";

function App() {

    let [counter, setCounter] = useState({
        p1: 0,
        p2: 0
    });

    return <div className={style.game}>
        <div className={style.player1}>
            <h2>Player 1</h2>
            <h3>{counter.p1}</h3>
            <Button onClick={() => setCounter(actualValue => {
                return {
                    ...actualValue,
                    p1: actualValue.p1 + 1
                }
            })}
                    type="primary"
                    shape="circle"
                    size="large">+</Button>
        </div>

        <div className={style.player2}>
            <h2>Player 2</h2>
            <h3>{counter.p2}</h3>
            <Button onClick={() => setCounter(actualValue => {
                return {
                    ...actualValue,
                    p2: actualValue.p2 + 1
                }
            })}
                    type="primary"
                    shape="circle"
                    size="large">+</Button>
        </div>

        <div className={style.button}>
            <Button onClick={() => {
                setCounter(actualValue => {
                    return {
                        ...actualValue,
                        p1: actualValue.p1 - 1,
                        p2: actualValue.p2 - 1
                    }
                })
            }}
                    type="primary"
                    shape="circle"
                    size="large">
                -
            </Button>
            <Button onClick={() => {
                setCounter(actualValue => {
                    return {
                        ...actualValue,
                        p1: 0,
                        p2: 0
                    }
                })
            }}
                    type="primary" danger size="large" shape="round">
                Reset
            </Button>
        </div>
    </div>
}

export default App;