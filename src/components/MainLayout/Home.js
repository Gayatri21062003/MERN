import React from "react";
import {CommonButton} from "../../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate(); //it is used to navigate between pages

    return (
        <div>
            <div className="text-center font-semibold text-xl my-2">Home</div>
            <div className="grid grid-cols-4 gap-10 px-10 my-5 h-9">
                <CommonButton
                    label="About"
                    type="button"
                    onClick={() => {
                        navigate("/about");
                    }}
                />

                <CommonButton
                    label="Products"
                    type="button"
                    onClick={() => {
                        navigate("/products");
                    }}
                />

                <CommonButton
                    label="React Form"
                    type="button"
                    onClick={() => {
                        navigate("/reactform");
                    }}
                />

                <CommonButton
                    label="React Hook Form"
                    type="button"
                    onClick={() => {
                        navigate("/reacthookform");
                    }}
                />
            </div>
            <div className="grid grid-cols-4 gap-10 px-10 my-5 h-9">
                <CommonButton
                    label="Registration Form"
                    type="button"
                    onClick={() => {
                        navigate("/registrationform");
                    }}
                />

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
            </div>
            <div className="grid grid-cols-4 gap-10 px-10 my-5 h-9">
                <CommonButton
                    label="Context API"
                    type="button"
                    onClick={() => {
                        navigate("/contextparent");
                    }}
                />

                <CommonButton
                    label="ClassParent"
                    type="button"
                    onClick={() => {
                        navigate("/classparent");
                    }}
                />

                <CommonButton
                    label="Use Reducer"
                    type="button"
                    onClick={() => {
                        navigate("/usereducer");
                    }}
                />

                <CommonButton
                    label="Redux"
                    type="button"
                    onClick={() => {
                        navigate("/reduxhome");
                    }}
                />
            </div>

            <div className="grid grid-cols-4 gap-10 px-10 my-5 h-9">
                <CommonButton
                    label="Form1 Demo"
                    type="button"
                    onClick={() => {
                        navigate("/form1demo");
                    }}
                />
                <CommonButton
                    label="Form All Data"
                    type="button"
                    onClick={() => {
                        navigate("/formalldata");
                    }}
                />

                <CommonButton
                    label="Parent Form"
                    type="button"
                    onClick={() => {
                        navigate("/parentform");
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
