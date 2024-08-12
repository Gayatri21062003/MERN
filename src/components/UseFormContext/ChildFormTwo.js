import React from "react";
import {useFormContext} from "react-hook-form";

function ChildFormTwo() {
    const {register} = useFormContext();

    return (
        <div>
            <label className="flex justify-center font-bold text-xl">Child Form Two</label>
            <div className="border border-gray-700 mx-[15%] py-5 rounded-md my-5  px-10">
                <div>
                    <input className="mx-3 text-center" name="gender" {...register("gender")} placeholder="Gender" />
                    <input
                        className="mx-3 text-center"
                        name="birthdate"
                        type="date"
                        {...register("birthdate")}
                        placeholder="Birth Date"
                    />
                    <input
                        className="mx-3 text-center"
                        name="birthplace"
                        {...register("birthplace")}
                        placeholder="Birth Place"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChildFormTwo;
