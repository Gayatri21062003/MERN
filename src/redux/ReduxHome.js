import {Button} from "@mui/material";
import React from "react";

import {useNavigate} from "react-router-dom";

function ReduxHome() {
    const navigate = useNavigate();

    return (
        <div>
            <p className="grid my-5 text-xl font-semibold">Redux Home</p>
            <div className="flex gap-3 justify-center">
                <div>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={() => {
                            navigate("/pageone");
                        }}
                    >
                        Page One
                    </Button>
                </div>
                <div>
                    <Button
                        type="button"
                        variant="outlined"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ReduxHome;
