import {Button, Input} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";

function ReactForm() {
    const [values, setValues] = React.useState({
        firstName: "",
        middleName: "",
        lastName: "",
        address: "",
    });

    const [users, setUsers] = React.useState([]);
    const navigate = useNavigate();

    // let testObject = {
    //     "xyz tuv": "abc",
    // };
    // console.log("test:", testObject["xyz"], testObject.xyz, testObject["xyz tuv"]);

    function handleChange(e) {
        // console.log("The inoutString :", e.target.name);
        setValues({...values, [e.target.name]: e.target.value});
    }

    console.log("Values in the form are :", users);

    function handleSubmit() {
        let dataArray = [...users];
        dataArray.push(values);
        setUsers(dataArray);
        setValues({
            firstName: "",
            middleName: "",
            lastName: "",
            address: "",
        });
    }

    return (
        <div>
            <div className="flex mx-2 my-2">
                <Button
                    type="button"
                    color="inherit"
                    variant="contained"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Back
                </Button>
            </div>
            <fieldset className="border border-black mx-60 my-10 rounded-lg p-3">
                <legend className="text-center font-semibold p-2 text-xl">ReactForm</legend>
                <div className="my-5 grid grid-cols-4 gap-10 items-center ">
                    <div className="p-2">
                        <Input
                            className="text-center border rounded-md"
                            name="firstname"
                            placeholder="First Name"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div className="p-2">
                        <Input
                            className="text-center border  rounded-md"
                            name="middlename"
                            placeholder="Middle Name"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div className="p-2">
                        <Input
                            className="text-center border  rounded-md"
                            name="lastname"
                            placeholder="Last Name"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                    <div className="p-2">
                        <Input
                            className="text-center border  rounded-md"
                            name="address"
                            placeholder="Address"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        className=" border-slate-500 text-black font-bold bg-slate-400 rounded-md px-10 h-7"
                        type="button"
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Submit
                    </button>
                </div>
            </fieldset>

            <div className="my-5 flex justify-center">
                <table className="w-[50%]">
                    <thead>
                        <tr>
                            <td className="font-semibold border border-gray-400 bg-slate-200 p-2 text-center">
                                First Name
                            </td>
                            <td className="font-semibold border border-gray-400 bg-slate-200 p-2 text-center">
                                Middle Name
                            </td>
                            <td className="font-semibold border border-gray-400 bg-slate-200 p-2 text-center">
                                Last Name
                            </td>
                            <td className="font-semibold border border-gray-400 bg-slate-200 p-2 text-center">
                                Address
                            </td>
                        </tr>
                    </thead>
                    <tbody className="border border-gray-400">
                        {users.length > 0
                            ? users.map((user, userIndex) => {
                                  return (
                                      <tr>
                                          <td>{user.firstname}</td>
                                          <td>{user.middlename}</td>
                                          <td>{user.lastname}</td>
                                          <td>{user.address}</td>
                                      </tr>
                                  );
                              })
                            : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ReactForm;
