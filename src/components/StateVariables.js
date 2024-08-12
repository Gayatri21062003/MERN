import {useState} from "react";
import React from "react";
import Calculate from "./Calculate";
import {useLocation, useNavigate} from "react-router-dom";
import {CommonButton} from "../CommonComponents/CommonButton";

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
            <div className="flex justify-center  font-bold" >
                State Variables
            </div>
            <div className="grid sm:grid-cols-6 mx-5 my-5 gap-5 px-10">
                <CommonButton
                    label="Calculate"
                    type="button"
                    onClick={() => {
                        navigate("/calculate");
                    }}
                />
                <CommonButton
                    label="Go Home"
                    type="button"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>

            <div className="my-5 border border-gray-700 w-[17%] mx-5 text-center  rounded-md">
            <input
            //   name={`discount${index}`}
            />
            </div>

            <div>{count}</div>
            <div>{string}</div>
            

            {boolean === true ? <div>Boolean Value is true..!</div> : null}
            {/* {boolean === true ? <div>Boolean Value is true..!</div> : ""} */}
            {/* {boolean === true ? <div>Boolean Value is true..!</div> :<div>Boolean Value is false..!</div>} */}

            <div>
                {array.map((item, index) => {
                    return (
                        <div>
                            <div>{item}</div>
                            <input
                                className=" my-5 border border-gray-700 w-[17%] mx-5 text-center  rounded-md"
                                type="text"
                                name={`Amount${index}`}
                            />
                        </div>
                    );
                })}
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3  gap-5  mx-20  my-5 ">
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

            <br />
            <br />
            <div className="text-center justify-center font-bold"></div>
        </div>
    );
}
