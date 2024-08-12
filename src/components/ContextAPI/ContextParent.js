import React,{createContext} from "react";
import ContextChildOne from "./ContextChildOne";
import ContextChildTwo from "./ContextChildTwo";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "../../CommonComponents/CommonButton";

export const FirstContext=createContext();

    export default function ContextParent(){

    const navigate=useNavigate();    

    const [name,setName]=React.useState("");
    return(
        <div>
            <div>ContextParent</div>
            <FirstContext.Provider value={{name,setName}}>
                <div>
                    <ContextChildOne/>
                </div>
                <div>
                    <ContextChildTwo/>
                </div>
            </FirstContext.Provider>
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
