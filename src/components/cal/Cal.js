
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {

    const allBtArr = [
        {value: 0, btFun: () => {
            console.log(0)
        }},
        {value: 1, btFun: () => {console.log(1)}},
        {value: 2, btFun: () => {console.log(2)}},
        {value: 3, btFun: () => {console.log(3)}},
    ];
    return (
        <div>
            <p> This is cal js</p>
            <CalWrapper  allBtArr={allBtArr}/>
        </div>
    )
};

export default Cal;