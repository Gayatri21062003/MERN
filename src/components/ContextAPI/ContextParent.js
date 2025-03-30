import React, {createContext} from "react";
import ContextChildOne from "./ContextChildOne";
import ContextChildTwo from "./ContextChildTwo";
import {useNavigate} from "react-router-dom";
import {CommonButton} from "../../CommonComponents/CommonButton";
import {Button} from "@mui/material";

export const FirstContext = createContext();

export default function ContextParent() {
    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    return (
        <div>
            <div className="flex mx-3 my-3">
                <Button
                    variant="contained"
                    color="inherit"
                    type="button"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go Back
                </Button>
            </div>
            <fieldset className="border border-black mx-60 rounded-lg">
                <legend className="text-xl font-medium p-2">Context Parent</legend>
                <FirstContext.Provider value={{name, setName}}>
                    <div>
                        <ContextChildOne />
                    </div>
                    <div>
                        <ContextChildTwo />
                    </div>
                </FirstContext.Provider>
            </fieldset>

            {/* <div className="grid sm:grid-cols-5 gap-5 px-10 my-5">
                <CommonButton
                    label="Context Parent Array"
                    type="button"
                    onClick={()=>{
                        navigate("/contextparentarray")
                    }}
                />
            </div> */}
        </div>
    );
}
