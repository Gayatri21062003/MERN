import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export default function ReactHookForm() {
    const [users, setUsers] = React.useState([]);

    const errorObject = yup.object().shape({
        firstname: yup
        .string()
        .required()
        .matches(/^[a-zA-Z]/),
        middlename: yup
        .string()
        .required()
        .matches(/^[a-zA-Z]/),
        lastname: yup
        .string()
        .required()
        .matches(/^[a-zA-Z]/),
        address: yup.string().required("You should enter the address"),
        aadharnumber: yup.string().required().min(12).max(12),
        mobilenumber: yup.string().required().min(10).max(12),
    });

    const defaultValues = {
        firstname: "",
        middlename: "",
        lastname: "",
        address: "",
        mobilenumber: "",
        aadharnumber: "",
    };

    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({
        defaultValues: defaultValues,
        mode: "onChange",
        resolver: yupResolver(errorObject),
    });
    console.log("The error from data:", errors);

    function onSubmitData(data) {
        console.log("Data From the form is:", data);
        let dataArray = [...users];
        dataArray.push(data);
        setUsers(dataArray);
    }

    return (
        <div className="">
            <div className="grid justify-items-center">
                <label className="text-xl my-5 font-bold tracking-wide border border-teal-900 px-10 rounded-md">
                    React Hook Form
                </label>
            </div>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <div>
                    <div className="flex justify-center">
                        <input
                            className="my-5  w-[17%] mx-5 shadow shadow-rose-200"
                            name="firstname"
                            {...register("firstname")}
                            placeholder="First Name"
                        />
                    </div>
                    <div className="flex justify-center">
                        <input
                            className="my-5  w-[17%] mx-5 shadow shadow-rose-200"
                            name="middlename"
                            {...register("middlename")}
                            placeholder="Middle Name"
                        />
                    </div>
                    <div className="flex justify-center">
                        <input
                            className="my-5  w-[17%] mx-5 shadow shadow-rose-200"
                            name="lastname"
                            {...register("lastname")}
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="flex justify-center">
                        <input
                            className="my-5  w-[17%] mx-5 shadow shadow-rose-200"
                            name="address"
                            {...register("address")}
                            placeholder="Address"
                        />
                    </div>
                    <div className="flex justify-center">
                        <input
                            className="my-5  w-[17%] mx-5 shadow shadow-rose-200"
                            name="mobilenumber"
                            {...register("mobilenumber")}
                            placeholder="Mobile Number"
                        />
                    </div>
                    <div className="flex justify-center">
                        <input
                            className="my-5  w-[17%] mx-5 shadow shadow-rose-200"
                            name="aadharnumber"
                            {...register("aadharnumber")}
                            placeholder="Aadhar Number"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-10 bg-slate-600 rounded-md border border-black">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
