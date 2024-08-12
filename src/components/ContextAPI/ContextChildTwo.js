import React, {useContext, useState} from "react";
import {FirstContext} from "./ContextParent";
import {CommonButton} from "../../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";

export default function ContextChildTwo() {
    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    }

    const {name, setName} = useContext(FirstContext);

    return (
        <div>
            <div>Context Child Two</div>

            <div className="grid sm:grid-cols-3 gap-5 px-10 my-5">
                <CommonButton
                    label="Set Name"
                    type="button"
                    onClick={() => {
                        setName(name + "Gayatri");
                    }}
                />

                <CommonButton
                    label="Context Parent Array"
                    type="button"
                    onClick={() => {
                        navigate("/contextparentarray");
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
        </div>
    );
}
