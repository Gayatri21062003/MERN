import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import ChildFormOne from "./ChildFormOne";
import ChildFormTwo from "./ChildFormTwo";
import ChildFormThree from "./ChildFormThree";

function ParentForm() {
    const defaultValues = {
        firstname: "Gayatri",
        lastname: "",
        age: "",

        gender: "",
        birthdate: "",
        birthplace: "",

        edudetails: [{previouseducation: "", passingyear: "", place: ""}],
    };

    const methods = useForm({
        defaultValues: defaultValues,
        mode: "onChange",
    });

    const {register, handleSubmit} = methods;

    function onSubmitData(data) {
        console.log("The data in the parent is:", data);
    }

    return (
        // <div>
        //     <div>Parent Form</div>
        // </div>

        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <ChildFormOne />
                <ChildFormTwo />
                <ChildFormThree />
                <div className="flex justify-center">
                    <button type="submit" className="border  border-black px-5 rounded-md mt-5 bg-black text-white">
                        Submit
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}

export default ParentForm;
