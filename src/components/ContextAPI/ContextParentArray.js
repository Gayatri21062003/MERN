import React, {createContext} from "react";
import ContextParentArrayChildOne from "./ContextParentArrayChildOne";
import {useNavigate} from "react-router-dom";
import {CommonButton} from "../../CommonComponents/CommonButton";

export const FirstParent = createContext();
function ContextParentArray() {
    const navigate = useNavigate();

    let initialArray = [0];
    const [array, setArray] = React.useState(initialArray);

    function PushArray(argument) {
        let dataArray = [...array];
        dataArray.push(argument);
    }

    function goBack() {
        navigate(-1);
    }
    function goHome() {
        navigate("/");
    }
    return (
        <div>
            <div className="font-bold">ContextParentArray</div>
            <div className="grid sm:grid-cols-6 gap-5 px-10 my-5">
            <CommonButton
                label="Go Back"
                type="button"
                onClick={() => {
                    goBack();
                }}
            />
            <CommonButton
                label="Go Home"
                type="button"
                onClick={() => {
                    goHome();
                }}
            />
            </div>

            {array.map((item, index) => {
                return <div>{item}</div>;
            })}
            <FirstParent.Provider value={{initialArray, array, setArray}}>
                <div>
                    <ContextParentArrayChildOne />
                </div>
            </FirstParent.Provider>
        </div>
    );
}

export default ContextParentArray;
