import React from "react";
import {CommonButton} from "../../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate(); //it is used to navigate between pages

    return (
        <div>
            <div className="text-center font-bold">Home</div>
            <div className="grid grid-cols-4 gap-10 px-10 my-5">
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
            <div className="grid grid-cols-4 gap-10 px-10">
                <CommonButton
                    label="Registration Form"
                    type="button"
                    onClick={() => {
                        navigate("/registrationform");
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
