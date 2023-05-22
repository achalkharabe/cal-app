

import Button from "../../common/Button";
import './Calwrapper.css';

const CalWrapper = (props) => {

    const {allBtArr ,oprationArr} = props;

    const allButton = allBtArr.map((btObj) => {
        return    <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />
    });
    const alloprationButton= oprationArr.map((btObj) => {
        return    <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />
    });

    console.log('allButton',allButton)

    return (
        <div className="cal">
        <div className="bt-fun">
        {allButton}
        </div>
        <div className="opfun">
        {alloprationButton}
        </div>
        </div>
    )
};

export default CalWrapper;