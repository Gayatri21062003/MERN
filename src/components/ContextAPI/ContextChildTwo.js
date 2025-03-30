import React, {useContext, useState} from "react";
import {FirstContext} from "./ContextParent";
import {CommonButton} from "../../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default function ContextChildTwo() {
    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    }

    const {name, setName} = useContext(FirstContext);

    return (
        <div>
            <div className="font-medium my-3">Context Child Two</div>

            <div className=" flex gap-4 justify-center my-5">
                <Button
                    type="button"
                    variant="outlined"
                    onClick={() => {
                        setName(name + "Gayatri ");
                    }}
                >
                    Set Name Here
                </Button>

                <Button
                    type="button"
                    variant="outlined"
                    onClick={() => {
                        navigate("/contextparentarray");
                    }}
                >
                    Context parent Array
                </Button>
            </div>
        </div>
    );
}
