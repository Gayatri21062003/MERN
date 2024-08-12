import { useState } from "react";
import React from "react";
import { CommonButton } from "../CommonComponents/CommonButton";
import { useNavigate } from "react-router-dom";

export default function Calculate()
{
    const navigate=useNavigate();
    function goHome()
    {
        navigate("/");
    }
    function goBack()
    {
        navigate(-1);
    }

    function ReadAmount()
    {
        var ra=document.getElementById("rate").value;

        var qa=document.getElementById("quantity").value;

        var cal = ra * qa;

        document.getElementById("amount").value = cal;

    }

        return(
            <div>
                <label for="rate">Rate :</label>
                <input className="text-center border border-slate-400 rounded-md" type="number" id="rate" />
                <label for="quantity">Quantity :</label>
                <input className="text-center border border-slate-400 rounded-md" type="number" id="quantity"/>
                <label for="amount">Amount</label>
                <input className="text-center border border-slate-400 rounded-md" type="number" id="amount" readOnly/>     
                <CommonButton
                    label="Amount"
                    type="button"
                    onClick={()=>{
                        ReadAmount();
                    }}
                />  

                <br/>
                <br/>

                <div className="grid grid-cols-2 gap-10 px-10">
                    <CommonButton
                        label="Go Home"
                        type="button"
                        onClick={()=>{
                            goHome();
                        }}
                    />

                    <CommonButton
                    label="Go Back"
                    type="button"
                    onClick={()=>{
                        goBack();
                    }}
                    /> 

                </div>     
            
        </div>
    )
}