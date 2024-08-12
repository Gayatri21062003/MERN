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
            <div>Child Component</div>
            <div className="grid sm:grid-cols-6 gap-8 px-10 my-3">
                <CommonButton
                    label="Increment"
                    type="button"
                    onClick={() => {
                        handleCallback();
                    }}
                />
                <CommonButton
                    label="Decrement"
                    type="button"
                    onClick={() => {
                        handleCallback1();
                    }}
                />
            </div>
        </div>
    );
}
