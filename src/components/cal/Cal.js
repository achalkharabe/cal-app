
import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";
import "./cal.css";
const Cal = () => {


    const [inputValue , setinputValue]=useState(0);
    const[operationValue,setOperationValue]=useState(0);
    const[currentOpration,setCurrentOpration]=useState('');
    const allBtArr = [
        {value: 0, btFun: () => {
            
            setinputValue(prevValue=>parseInt(prevValue.toString()+0))
        }},
        {value: 1, btFun: () => {
            
            setinputValue(prevValue=>parseInt(prevValue.toString()+1))}},
        {value: 2, btFun: () => {
            setinputValue(prevValue=>parseInt(prevValue.toString()+2))}},
        {value: 3, btFun: () => {
           
             setinputValue(prevValue=>parseInt(prevValue.toString()+3))
        }},
        {value: 4, btFun: () => {
            setinputValue(prevValue=>parseInt(prevValue.toString()+4))
        }},
        
        {value: 5, btFun: () => {
            setinputValue(prevValue=>parseInt(prevValue.toString()+5))
        }},
        {value: 6, btFun: () => {
            setinputValue(prevValue=>parseInt(prevValue.toString()+6))
        }},
        {value: 7, btFun: () => {
            setinputValue(prevValue=>parseInt(prevValue.toString()+7))
        }},
        {value: 8, btFun: () => {
            setinputValue(prevValue=>parseInt(prevValue.toString()+8))
        }},
        {value: 9, btFun: () => {
            setinputValue(prevValue=>parseInt(prevValue.toString()+9))
        }},
        
    ];

    const oprationArr=[
       
        {
            value: '+',
            btFun:()=>{
                setCurrentOpration('+');
          setOperationValue(inputValue);
          setinputValue(0);
            }
        },
        {
            value: '-',
            btFun:()=>{
                setCurrentOpration('-');
          setOperationValue(inputValue);
          setinputValue(0);
            }
        },
        {
            value: '*',
            btFun:()=>{
                setCurrentOpration('*');
          setOperationValue(inputValue);
          setinputValue(0);
            }
        },
        {
            value: '/',
            btFun:()=>{
                setCurrentOpration('/');
          setOperationValue(inputValue);
          setinputValue(0);
            }
        },
        
        {
           value:'=',
           btFun:()=>{
            if(currentOpration==='+'){

                setinputValue((prevValue)=>{
                    return prevValue+operationValue;
                })
            }else if(currentOpration==='-'){
                setinputValue((prevValue)=>{
                    return operationValue-prevValue;
                })
            }
            else if(currentOpration==='*'){
                setinputValue((prevValue)=>{
                    return prevValue* operationValue;
                })
            } 
            else if(currentOpration==='/'){
                setinputValue((prevValue)=>{
                    return operationValue/prevValue ;
                })
            } 
           }
        }
    ];

    return (
        <div className="p">
            <p> This is cal js {inputValue}</p>
            <p>{operationValue}{currentOpration}</p>
            <CalWrapper  allBtArr={allBtArr} oprationArr={oprationArr}/>
        </div>
    )
};

export default Cal;