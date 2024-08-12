import React from "react";
import {useNavigate} from "react-router-dom";
import {CommonButton} from "../../CommonComponents/CommonButton";

function MainPage() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="text-center font-bold">MainPage</div>
            <div className="grid sm:grid-cols-2  xl:grid-cols-4 gap-10 px-10 my-5">
                <CommonButton
                    label="State Variables"
                    type="button"
                    onClick={() => {
                        navigate("/statevariables");
                    }}
                />

                <CommonButton
                    label="Arithmetic"
                    type="button"
                    onClick={() => {
                        navigate("/arithmetic");
                    }}
                />

                <CommonButton
                    label="Props And CallBack"
                    type="button"
                    onClick={() => {
                        navigate("/parent");
                    }}
                />

                <CommonButton
                    label="Context API"
                    type="button"
                    onClick={() => {
                        navigate("/contextparent");
                    }}
                />
            </div>
        </div>
    );
}

export default MainPage;
