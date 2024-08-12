import {useState} from "react";
import React from "react";
import {CommonButton} from "../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";

export default function Arithmetic() {
    const navigate = useNavigate();

    let initialArray = [1, 2];

    let intialState = 0;
    //   const [count, setCount] = React.useState(intialState);
    const [count, setCount] = useState(intialState);
    const [string, setString] = useState("");
    const [boolean, setBoolean] = useState(false);
    const [array, setArray] = useState(initialArray);
    const [object, setObject] = useState(null);

    //   const [isCompany,setIsCompany]=useState(false)
    // const [count,setCount]=useState(0)

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

        clone.age = 20;
        clone.name = "Roy";

        setObject(clone);
    }

    function resetCount(argument) {
        setCount(argument);
    }

    //   if(){

    //   }else{

    //   }

    function goHome() {
        navigate("/");
    }

    return (
        <div>
            <div
                style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    marginTop: "10px",
                    marginBottom: "10px",
                }}
            >
                State Variables
            </div>

            <div className="grid sm:grid-cols-5 gap-5  mx-20  my-5">
                <CommonButton
                    label="Go Home"
                    type="button"
                    onClick={() => {
                        goHome();
                    }}
                />
            </div>
           
            <input className="my-5 border border-gray-700 w-[17%] mx-5 text-center  rounded-md"
            //   name={`discount${index}`}
            />
          

            

            <div>{count}</div>
            <div>{string}</div>
            <div>{object?.name + " " + object?.age}</div>

            {boolean === true ? <div>Boolean Value is true..!</div> : null}
            {/* {boolean === true ? <div>Boolean Value is true..!</div> : ""} */}
            {/* {boolean === true ? <div>Boolean Value is true..!</div> :<div>Boolean Value is false..!</div>} */}

            <div>
                {array.map((item, index) => {
                    return (
                        <div>
                            <div>{item}</div>
                            <input
                                className="my-5 border border-gray-700 w-[17%] mx-5 text-center  rounded-md"
                                type="text"
                                name={`Amount${index}`}
                            />
                        </div>
                    );
                })}
            </div>
            <br />
            <br />
            <div className="grid sm:grid-cols-3 gap-8 px-10">
                <CommonButton
                    label="Increment"
                    type="button"
                    onClick={() => {
                        incrementCount(2);
                    }}
                />

                <CommonButton
                    label="Decrement"
                    type="button"
                    onClick={() => {
                        decrementCount(2);
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
