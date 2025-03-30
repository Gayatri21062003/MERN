import React from "react";
import Child from "./Child";
import Child1 from "./Child1";
import {CommonButton} from "../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default function Parent() {
    const navigate = useNavigate();

    function goHome() {
        navigate("/");
    }

    //props-properties
    const [count, setCount] = React.useState(0);
    const [boolean, setBoolean] = React.useState(false);
    return (
        <div>
            <div className="flex mx-3 my-3">
                <Button
                    type="button"
                    variant="contained"
                    color="inherit"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Back
                </Button>
            </div>
            {/* <div className="font-bold text-xl my-2">Parent Component</div> */}
            <fieldset className="border border-black mx-40 rounded-lg">
                <legend className="font-bold text-xl my-2">Parent Component</legend>
                <div className="text-xl font-semibold my-5">Count is : {count}</div>
                {boolean === true}
                <Child count={count} setCount={setCount} d={"Gayatri"} />
            </fieldset>

            <fieldset className="border border-black my-5 mx-40 rounded-lg">
                <Child1 setBoolean={setBoolean} />

                {boolean === true ? (
                    <div className="font-semibold text-xl">State is true</div>
                ) : (
                    <div className="font-semibold text-xl">State is false</div>
                )}

                <div className="flex justify-center my-3">
                    <CommonButton
                        label="Toggle Child"
                        type="button"
                        onClick={() => {
                            setBoolean(!boolean);
                        }}
                    />
                </div>
            </fieldset>
        </div>
    );
}
