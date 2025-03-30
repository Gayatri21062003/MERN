import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrementNumber, incrementNumber} from "./FirstReducer";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function PageOne() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const number = useSelector((state) => state["firstreducer"]["value"]);
    return (
        <div>
            <div className="my-2 font-semibold text-xl">PageOne</div>
            <div className="flex justify-center gap-3 my-5">
                <div>
                    <Button
                        type="button"
                        variant="outlined"
                        color="info"
                        onClick={() => {
                            dispatch(incrementNumber(10));
                        }}
                    >
                        Increment
                    </Button>
                </div>
                <div>
                    <Button
                        type="button"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                            dispatch(decrementNumber(5));
                        }}
                    >
                        Decrement
                    </Button>
                </div>
                <div>
                    <Button
                        type="button"
                        variant="outlined"
                        color="inherit"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PageOne;
