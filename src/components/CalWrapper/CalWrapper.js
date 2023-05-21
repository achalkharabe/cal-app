

import Button from "../../common/Button";

const CalWrapper = (props) => {

    const {allBtArr } = props;

    const allButton = allBtArr.map((btObj) => {
        return    <Button btName={btObj.value} btFun={btObj.btFun} />
    });

    console.log('allButton',allButton)

    return (
        <div>
        
        {allButton}
        </div>
    )
};

export default CalWrapper;