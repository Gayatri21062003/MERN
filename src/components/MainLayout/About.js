import React from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {CommonButton} from "../../CommonComponents/CommonButton";

function About() {
    const Navigate = useNavigate(); //it is used to navigate between pages
    //used to access information provided while navigate
    const location = useLocation();

    const info = location.state;
    console.log("The information is:", location.state);
    function BackHome() {
        Navigate("/");
    }
    return (
        <div>
            <div className="text-center font-semibold text-xl">About</div>
            <div className="flex mx-2 my-2">
                <CommonButton
                    label="BACK"
                    type="button"
                    onClick={() => {
                        Navigate("/");
                    }}
                />
            </div>
        </div>
    );
}

export default About;
