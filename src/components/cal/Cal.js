
import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {


    const [inputValue , setinputValue]=useState(0);
    const allBtArr = [
        {value: 0, btFun: () => {
            setinputValue(0)
        }},
        {value: 1, btFun: () => {
            
            setinputValue(1)}},
        {value: 2, btFun: () => {
            setinputValue(2)}},
        {value: 3, btFun: () => {
            setinputValue(3)
        }},
        
    ];
    return (
        <div>
            <p> This is cal js {inputValue}</p>
            <CalWrapper  allBtArr={allBtArr}/>
        </div>
    )
};

export default Cal;