import React from "react";
import {CommonButton} from "../CommonComponents/CommonButton";

export default function Child(props) {
    const {count, setCount} = props;
    console.log("Props from Parent :", props);

    function handleCallback() {
        setCount(count + 1);
    }
    function handleCallback1() {
        setCount(count - 1);
    }
    return (
        <div>
            <div className=" font-medium my-2">Child Component</div>
            <div className="flex justify-center my-3 gap-3">
                <div>
                    <CommonButton
                        label="Increment"
                        type="button"
                        onClick={() => {
                            handleCallback();
                        }}
                    />
                </div>
                <div>
                    <CommonButton
                        label="Decrement"
                        type="button"
                        onClick={() => {
                            handleCallback1();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
