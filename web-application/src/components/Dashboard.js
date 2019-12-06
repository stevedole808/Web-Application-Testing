import React from 'react';
import {useState} from 'react'
import Display from './Display'

function Dashboard () {
    const [balls, setBalls] = useState(0)
    const [strikes, setStrikes] = useState(0)

    const Balls = () => {
        if (balls < 4) {
            setBalls (balls + 1)
        }
        else if (balls === 4) {
            setBalls (0)
            setStrikes (0)
        }
    }

    const Hits = () => {
        setBalls(0)
        setStrikes(0)
    }

    const Fouls = () => {
        if (strikes === 0) {
            setStrikes(strikes + 1) 
        }
        else if (strikes === 1 ) {
            setStrikes(strikes + 1) 
        }
    }

    const Strikes = () => {
        if (strikes === 3){
            setBalls (0)
            setStrikes (0)
        }
        else if (strikes < 3) {
            setStrikes (strikes + 1)
        }
    }
    return (
        <div>
        <Display  ballsData={balls} strikeData={strikes}/>
        <button onClick = {Strikes}>Strike</button>
        <button onClick = {Balls}>Ball</button>
        <button onClick = {Fouls}>Foul</button>
        <button onClick = {Hits}>Hit</button>
        </div>
    )
}

export default Dashboard
