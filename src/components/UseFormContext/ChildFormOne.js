import React from "react";
import {useFormContext} from "react-hook-form";

function ChildFormOne() {
    const {register} = useFormContext();

    return (
        <div>
            <label className="flex justify-center mt-3 mb-3 font-bold text-xl">Child Form One</label>
            <div className="border border-gray-700 mx-[15%] py-5 rounded-md my-5 px-10">
                <div>
                    <input className="" name="firstname" {...register("firstname")} placeholder="Enter First Name" />

                    <input
                        className="mx-3 text-center"
                        name="lastname"
                        {...register("lastname")}
                        placeholder="Enter Last Name"
                    />

                    <input className="mx-3 text-center" name="age" {...register("age")} placeholder="Enter Age" />
                </div>
            </div>
        </div>
    );
}

export default ChildFormOne;
