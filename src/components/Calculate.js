import {useState} from "react";
import React from "react";
import {CommonButton} from "../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";

export default function Calculate() {
    const navigate = useNavigate();
    function goHome() {
        navigate("/");
    }
    function goBack() {
        navigate(-1);
    }

    function ReadAmount() {
        var ra = document.getElementById("rate").value;

        var qa = document.getElementById("quantity").value;

        var cal = ra * qa;

        document.getElementById("amount").value = cal;
    }

    return (
        <div>
            <div className=" flex mx-2 my-2 gap-2 ">
                <Button
                    type="button"
                    variant="contained"
                    color="inherit"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Back
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    color="inherit"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Home
                </Button>
            </div>

            <div className="border border-black p-2 mx-60 rounded-lg">
                <p className="font-medium text-xl">Calculate Amount</p>
                <div className="p-3">
                    <TextField type="number" id="rate" label="Rate" />
                </div>

                <div className="p-3">
                    <TextField type="number" id="quantity" label="Quantity" />
                </div>

                <div className="p-3">
                    <TextField type="text" id="amount" readOnly />
                </div>
                <div>
                    <Button
                        type="button"
                        color="info"
                        variant="contained"
                        onClick={() => {
                            ReadAmount();
                        }}
                    >
                        Amount
                    </Button>
                </div>
            </div>
        </div>
    );
}
