import React from "react";
import {useFieldArray, useFormContext} from "react-hook-form";

function ChildFormThree() {
    const {register, control, getValues} = useFormContext();

    const {fields, append, remove} = useFieldArray({
        name: "edudetails",
        control,
    });

    let string = "String ${fields}";

    return (
        <div className="text-center">
            <label className="font-bold text-xl">Child Form Third</label>
            {/* <div className="">
                <input
                    className="ml-5"
                    name="previouseducation"
                    {...register("prevoiuseducation")}
                    placeholder="Previous Completed Edu"
                />
                <input className="ml-5" name="passingyear" {...register("passingyear")} placeholder="Passing Year" />
            </div> */}

            {fields.map((field, fieldindex) => {
                return (
                    <div className="border border-gray-700 mx-[15%] py-5 grid grid-cols-5  rounded-md my-5  px-10">
                        <input
                            name={"edudetails[${fieldindex}].previouseducation"}
                            placeholder="Previous Education"
                            className="mx-3 text-center"
                        />
                        <input
                            name={"educationdetails[${fieldindex}].passingyear"}
                            placeholder="Passing Year"
                            className="mx-3 text-center"
                        />
                        <input
                            name={"educationdetails[${fieldindex}].place"}
                            placeholder="Place"
                            className="mx-3 text-center"
                        />

                        <button
                            className="bg-blue-500 font-bold"
                            type="button"
                            onClick={() => {
                                append(fieldindex);
                            }}
                        >
                            Add
                        </button>
                        <div>
                            {fieldindex !== 0 ? (
                                <button
                                    className="bg-red-500 px-10 font-bold"
                                    type="button"
                                    onClick={() => {
                                        remove(fieldindex);
                                    }}
                                >
                                    Remove
                                </button>
                            ) : null}
                        </div>

                        {/* <button
                        type="button"
                        onClick={() => {
                            console.log("FieldValue:", getValues("firstname"));
                        }}
                    >
                        Get Values
                    </button> */}
                    </div>
                );
            })}
        </div>
    );
}

export default ChildFormThree;
