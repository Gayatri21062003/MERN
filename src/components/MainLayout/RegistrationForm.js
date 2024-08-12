import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export default function RegistrationForm() {
    const [users, setUsers] = React.useState([]);

    const errorObject = yup.object().shape({
        fullname: yup
        .string()
        .required()
        .matches(/^[a-zA-Z]/),
    });

    const defaultValues = {
        fullname: "",
        username: "",
        email: "",
        contact: "",
        password: "",
        confirmpassword: "",
        gender: "",
        birthdate: "",
        aadharnumber: "",
        panid: "",
        courses: "",
        nationality: "",
        address: "",
    };

    const {handleSubmit, register} = useForm({
        defaultValues: defaultValues,
    });
    function onSubmitData(data) {
        console.log("Data From the form is:", data);
        let dataArray = [...users];
        dataArray.push(data);
        setUsers(dataArray);
    }

    return (
        <div>
            <div className="text-center border border-black mx-60 my-5 py-5 text-white bg-black font-bold text-2xl">
                Student Registration Form
            </div>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <div className="border border-gray-950 flex mx-60 my-5 flex-wrap">
                    <div className="grid justify-items-center  pl-40 ">
                        <label className="  font-semibold  ">Full Name</label>
                        <input
                            className=" border border-gray-400  rounded-md w-60 text-center my-3 mx-20  "
                            {...register("fullname")}
                            name="fullname"
                            placeholder="Enter Full Name"
                        />

                        <label className=" font-semibold">Email</label>
                        <input
                            className="border border-gray-400 rounded-md  w-60 text-center my-3 mx-20"
                            name="email"
                            {...register("email")}
                            type="email"
                            placeholder="Enter Email ID"
                        />

                        <label className="font-semibold">Password</label>
                        <input
                            className=" border border-gray-400  rounded-md w-60 text-center my-3 mx-20"
                            name="password"
                            {...register("password")}
                            type="password"
                            placeholder="Enter Password"
                        />

                        <label className="font-semibold ">Gender</label>
                        <div className="flex">
                            <input className="" name="gender" {...register("gender")} type="radio" value="Male" />
                            <label>Male</label>
                            <input className="" name="gender" {...register("gender")} type="radio" value="Female" />
                            <label>Female</label>
                        </div>

                        <label className="font-semibold">Aadhar Number</label>
                        <input
                            className="border border-gray-400  rounded-md w-60 text-center my-3 mx-20"
                            name="aadharnumber"
                            {...register("aadharnumber")}
                            placeholder="Enter Aaadhar Number"
                        />

                        <label className="font-semibold">Courses</label>
                        <select
                            name="courses"
                            {...register("courses")}
                            className="border border-gray-400  rounded-md w-60 text-center my-3 mx-20"
                        >
                            <option value="">Select Course--------</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="B.Sc.">B.Sc.</option>
                            <option value="B.E.">B.E.</option>
                            <option value="BCA">BCA</option>
                            <option value="BCS">BCS</option>
                        </select>
                    </div>

                    <div className="grid justify-items-center">
                        <label className=" font-semibold">Username</label>
                        <input
                            className=" border border-gray-400  rounded-md w-60 text-center my-3"
                            name="username"
                            {...register("username")}
                            placeholder="Enter Username"
                        />
                        <label className="font-semibold">Contact</label>
                        <input
                            className=" border border-gray-400  rounded-md w-60 text-center my-3"
                            name="contact"
                            {...register("contact")}
                            type="telephone"
                            placeholder="Enter Contact Number"
                        />

                        <label className="font-semibold">Confirm Password</label>
                        <input
                            className=" border border-gray-400  rounded-md w-60 text-center my-3"
                            name="confirmpassword"
                            {...register("confirmpassword")}
                            type="password"
                            placeholder="Re-Enter Password"
                        />

                        <label className="font-semibold">Birth Date</label>
                        <input
                            className=" border border-gray-400  rounded-md w-60 text-center my-3"
                            name="birthdate"
                            {...register("birthdate")}
                            type="date"
                        />

                        <label className="font-semibold">Pan Card ID</label>
                        <input
                            className="border border-gray-400  rounded-md w-60 text-center my-3"
                            name="panid"
                            {...register("panid")}
                            type="text"
                            placeholder="Enter PAN Card Number"
                        />

                        <label className="font-semibold">Nationality</label>
                        <select
                            name="nationality"
                            {...register("nationality")}
                            className="border border-gray-400  rounded-md w-60 text-center my-3"
                        >
                            <option value="">Select Nationality-------</option>
                            <option value="Indian">Indian</option>
                            <option value="OutOfIndia">Out Of India</option>
                        </select>
                    </div>
                    <label className="ml-[40%] mt-2 mb-3 font-semibold">Address</label>
                    <input
                        name="address"
                        placeholder="Type Here..."
                        className="
                    h-10 border border-gray-950 my-5"
                    />
                </div>

                <div></div>
            </form>
        </div>
    );
}
