import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import ChildFormOne from "./ChildFormOne";
import ChildFormTwo from "./ChildFormTwo";
import ChildFormThree from "./ChildFormThree";
import axios from "axios";
import {CommonButton} from "../../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";

function ParentForm() {
    const defaultValues = {
        firstname: "",
        middlename: "",
        lastname: "",
        age: "",
        gender: "",
        birthdate: "",
        birthplace: "",

        edudetails: [{previouseducation: "", passingyear: "", place: ""}],
    };

    const navigate = useNavigate();

    const methods = useForm({
        defaultValues: defaultValues,
        mode: "onChange",
    });

    const {register, handleSubmit} = methods;

    function onSubmitData(data) {
        console.log("The data in the parent is:", data);
        const educationArray = [];

        if (data?.edudetails?.length > 0) {
            let dataarray = data["edudetails"];
            for (let object of dataarray) {
                let educationObject = {
                    previouseducation: object?.previouseducation,
                    passingyear: Number(object?.passingyear),
                    place: object?.place,
                };
                educationArray.push(educationObject);
            }
        }

        let postObject = {
            firstName: data?.firstname,
            middleName: data?.middlename,
            lastName: data?.lastname,
            age: Number(data?.age),
            educationDetails: educationArray,
        };

        axios
        .post("http://localhost:5000/saveuser", postObject, {
            "content-type": "application.json",
        })
        .then((response) => {
            alert("User saved successfully..!!");
        });
    }

    return (
        // <div>
        //     <div>Parent Form</div>
        // </div>

        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <ChildFormOne />
                {/* <ChildFormTwo /> */}
                <ChildFormThree />
                <div className="flex gap-3 justify-center">
                    <div>
                        <button type="submit" className="border  border-black px-5 rounded-md bg-black text-white">
                            Submit
                        </button>
                    </div>
                    <div className="">
                        <CommonButton
                            label="Back"
                            type="button"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                    </div>
                </div>
            </form>
        </FormProvider>
    );
}

export default ParentForm;
