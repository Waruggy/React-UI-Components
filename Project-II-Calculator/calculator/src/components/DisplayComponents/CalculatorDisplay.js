import React from 'react';
import './Display.css';
import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton";
import {numPadNumbers} from "../data/CalculatorData";
import {numPadAction} from "../data/CalculatorData";

function CalculatorDisplay() {
    return ( 
        <div className = "calc">
        <div className = "calc-screen" >0</div>  
        <div className = "num-pad">
        <div className = "big-button">clear</div>
            {
        numPadNumbers.map((num, index) => {
            return <NumberButton class = "num-button" text = {num.text} key={index}/>
        })
    } 
    <div className = "big-button">0</div> 
</div>

        <div className = "action-pad" > 
            {
            numPadAction.map((action, index) => {
                return <ActionButton class = "action-button" text = {action.text} key={index}/>
            })
        } 
        </div> 
    </div>
);
}

export default CalculatorDisplay;
