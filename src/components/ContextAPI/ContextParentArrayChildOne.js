import React, {useContext, useState} from "react";
import {FirstParent} from "./ContextParentArray";
import {CommonButton} from "../../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";

function ContextParentArrayChildOne() {
    const navigate = useNavigate();

    const {initialArray, array, setArray} = useContext(FirstParent);

    function Push(argument) {
        let dataArray = [...array];
        dataArray.push(argument);
        setArray(dataArray);
    }

    function goHome() {
        navigate("/");
    }
    function goBack() {
        navigate(-1);
    }

    return (
        <div>
            <div className="font-bold">Context Parent Array Child dOne</div>

            <div className="grid sm:grid-cols-6 gap-5 px-10 my-5">
                <CommonButton
                    label="PUSH"
                    type="button"
                    onClick={() => {
                        Push(1);
                    }}
                />
                <CommonButton
                    label="RESET"
                    type="button"
                    onClick={() => {
                        Push(initialArray);
                    }}
                />
            </div>

            
            {/* <div className="grid grid-cols-2 gap-10 px-10">
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
            </div> */}
        </div>
    );
}

export default ContextParentArrayChildOne;
