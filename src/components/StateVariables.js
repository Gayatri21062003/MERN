import {useState} from "react";
import React from "react";
import Calculate from "./Calculate";
import {useLocation, useNavigate} from "react-router-dom";
import {CommonButton} from "../CommonComponents/CommonButton";
import {Button, TextField} from "@mui/material";

export default function StateVariables() {
    const navigate = useNavigate();
    const location = useLocation();

    let initialArray = [1, 2];

    let intialState = 0;
    //   const [count, setCount] = React.useState(intialState);
    const [count, setCount] = useState(intialState);
    const [string, setString] = useState("");
    const [boolean, setBoolean] = useState(false); //either true or false
    const [array, setArray] = useState(initialArray);
    const [object, setObject] = useState(null);

    //   const [isCompany,setIsCompany]=useState(false)
    // const [count,setCount]=useState(0)

    function backHome() {
        navigate("/");
    }
    function Back() {
        navigate(-1);
    }

    function incrementCount(argument) {
        setCount(count + argument);
        setString(string + `Hello..!${argument}`);
        // setString(`Hello..!${argument}`);
        setBoolean(!boolean);
        // `discount${index}`

        // `The Name is :${dynamic Value}`

        let dataArray = [...array];

        dataArray.push(argument);

        setArray(dataArray);

        // let user = {
        //   name: "John",
        //   age: 25,
        // };
        // setObject(user);
        setObject({
            name: "John",
            age: 25,
        });
    }

    function decrementCount(argument) {
        setCount(count - argument);

        let clone = structuredClone(object);

        clone.age = 30;
        clone.name = "Joe";

        setObject(clone);
    }

    function resetCount(argument) {
        setCount(argument);
    }

    //   if(){

    //   }else{

    //   }

    // console.log("") --   to get the information while debugging
    // console.error("") -- to get the errors while debugging
    // console.table(tableVariable) -- to get the consolled data in table structure format in the debugging console

    //function handleChange(e)
    //{
    //console.log("The onChange Value",e.target.value);
    //}

    // function handleFocus(e)
    //{
    //console.log("The onFocus Value",e.target.value);
    //}

    //function handleBlur(e)
    //{
    //console.log("The onBlur Value",e.target.value);
    //}

    return (
        <div>
            <div className="flex mx-2 my-2 gap-3">
                <Button
                    type="button"
                    onClick={() => {
                        navigate("/");
                    }}
                    variant="contained"
                    color="inherit"
                >
                    Back
                </Button>
                <Button
                    type="button"
                    onClick={() => {
                        navigate("/calculate");
                    }}
                    variant="contained"
                    color="inherit"
                >
                    Calculate
                </Button>
            </div>
            <fieldset className="border border-black rounded-lg mx-40 my-5 p-3 ">
                <legend className="text-xl font-semibold p-1">State Variables</legend>
                <div className="my-5 font-medium">Count is : {count}</div>
                <div className="flex justify-center">
                    <div className="mx-3">
                        <div className="font-semibold">{string}</div>
                    </div>
                    <div className="flex justify-center mx-3">
                        <div className="font-semibold">{object?.name}</div>
                        <div className="font-semibold">{object?.age}</div>
                    </div>
                </div>

                {/* <div>{object?.name + " " + object?.age}</div> */}

                {boolean === true ? <div className="text-xl font-medium">Boolean Value is true..!</div> : null}
                {/* {boolean === true ? <div>Boolean Value is true..!</div> : ""} */}
                {/* {boolean === true ? <div>Boolean Value is true..!</div> :<div>Boolean Value is false..!</div>} */}

                <div>
                    {array.map((item, index) => {
                        return (
                            <div>
                                <div>{item}</div>
                                <TextField
                                    className="my-5 border border-gray-700 w-[17%] mx-5 text-center  rounded-md"
                                    // type="text"
                                    label="Amount"
                                    name={`Amount${index}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </fieldset>

            <div className=" flex justify-center gap-4 h-8">
                <CommonButton
                    label="Increment"
                    type="button"
                    onClick={() => {
                        incrementCount(4);
                    }}
                />
                <CommonButton
                    label="Decrement"
                    type="button"
                    onClick={() => {
                        decrementCount(4);
                    }}
                />
                <CommonButton
                    label="Reset Count"
                    type="button"
                    onClick={() => {
                        resetCount(0);
                    }}
                />
            </div>
        </div>
    );
}
