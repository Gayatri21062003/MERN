import React from "react";
import Child from "./Child";
import Child1 from "./Child1";
import {CommonButton} from "../CommonComponents/CommonButton";
import { useNavigate } from "react-router-dom";

export default function Parent() {

    const navigate=useNavigate();

    function goHome()
    {
        navigate("/");
    }

    //props-properties
    const [count, setCount] = React.useState(0);
    const [boolean, setBoolean] = React.useState(false);
    return (
        <div>
            <div className="font-bold">Parent Component</div>
            <div>Count is:{count}</div>
            {boolean === true}
            <Child count={count} setCount={setCount} d={"Gayatri"} />

            <Child1 setBoolean={setBoolean} />

            {boolean === true ? <div>State is true</div> : <div>State is false</div>}

            <div className="grid sm:grid-cols-6 gap-8 px-10 my-3">
                <CommonButton
                    label="Toggle Child"
                    type="button"
                    onClick={() => {
                        setBoolean(!boolean);
                    }}
                />

                <CommonButton
                label="Go Home"
                type="button"
                onClick={()=>{
                    goHome();
                }
                }
                />
            </div>
        </div>
    );
}
