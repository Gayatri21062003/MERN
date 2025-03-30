import React, {createContext} from "react";
import {ProfileIcon, SearchIcon, SerachIcon} from "../CommonComponents/CommonAssets";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {current} from "@reduxjs/toolkit";
import FormAllData from "./FormAllData";
import {useDispatch} from "react-redux";
import {addUsers} from "../redux/FirstReducer";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material";
import {CommonButton} from "../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";

function Form1Demo() {
    const [info, setInfo] = React.useState([]);
    const [img, setImg] = React.useState("");
    const imgref = React.useRef(null);
    const [identificationimg, setIdentificationImg] = React.useState("");
    const [incomedocimg, setIncomeDocImg] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const defaultValues = {
        uhid: "",
        prefix: "Prefix",
        firstname: "",
        dob: "",
        age: "",
        bloodgroup: "Blood Group",
        identificationdoc: "Identification Document",
        mobileno: "",
        middlename: "",
        years: "",
        months: "",
        days: "",
        maritalstatus: "Marital Status",
        identificationno: "Identification Number",
        email: "",
        lastname: "",
        gender: "",
        nationality: "Nationality",
        identificationimg: "",
        profileimg: "",
        housedetails: "",
        state: "",
        area: "",
        streetaddress: "",
        district: "District",
        tehsil: "Tehsil",
        country: "Country",
        pincode: "",
        city: "City/Village/Town",
        incomerange: "Income Range",
        incomedoc: "Income Document",
        incomedocimg: "",
        refferaltype: "reffreal Type",
        doctorname: "Doctor Name",
        dateofvisit: "",
        patientsource: "Patient Source",
        visittype: "Visit Type",
        patientcategory: "Patient Category",
        department: "Department",
        cabin: "Cabin",
        doctor: "Doctor",
        reasons: "",
        nameofrepresentative: "",
        mobileofrepresentative: "",
        relationship: "Relationship",
        address: "",
        village: "Village",
    };

    const errorObject = yup.object().shape({
        uhid: yup.string().required("Enter UHID"),
        // prefix: yup.string().required(),
        firstname: yup.string().required("Enter First Name"),
        // dob: yup.string().required(),
        // age: yup.string().required(),
        // bloodgroup: yup.string().required(),
        // identificationdoc: yup.string().required(),
        // mobileno: yup.string().required(),
        // middlename: yup.string().required(),
        // years: yup.string().required(),
        // months: yup.string().required(),
        // days: yup.string().required(),
        // maritalstatus: yup.string().required(),
        // identificationno: yup.string().required(),
        // email: yup.string().required(),
        // lastname: yup.string().required(),
        // email: yup.string().required(),
        // nationality: yup.string().required(),
        // identificationdocimg: yup.string().required(),
        // identificationdocimg: yup.string().required(),
        // housedetails: yup.string().required(),
        // streetaddress: yup.string().required(),
        // country: yup.string().required(),
        // state: yup.string().required(),
        // district: yup.string().required(),
        // pincode: yup.string().required(),
        // area: yup.string().required(),
        // tehsil: yup.string().required(),
        // city: yup.string().required(),
        // incomerange: yup.string().required(),
        // incomedoc: yup.string().required(),
        // incomedocimg: yup.string().required(),
        // refferaltype: yup.string().required(),
        // doctorname: yup.string().required(),
        // dateofvisit: yup.string().required(),
        // patientsource: yup.string().required(),
        // visittype: yup.string().required(),
        // patientcategory: yup.string().required(),
        // department: yup.string().required(),
        // cabin: yup.string().required(),
        // doctor: yup.string().required(),
        // reasons: yup.string().required(),
        // nameofrepresentative: yup.string().required(),
        // mobileofrepresentative: yup.string().required(),
        // relationship: yup.string().required(),
        // address: yup.string().required(),
        // village: yup.string().required(),
    });

    const {
        reset,
        watch,
        handleSubmit,
        register,
        formState: {errors},
    } = useForm({
        mode: "onChange",
        defaultValues: defaultValues,
        resolver: yupResolver(errorObject),
    });

    function onSubmitData(data) {
        let formData = data;
        console.log("Form1Demo component rendered");
        // console.log("onSubmitData function called with data:", data);
        // console.log("handleProfileImg function called with event:", e);
        // console.log("handleIdentificationImg function called with event:", e);
        // console.log("handleIncomeDocImg function called with event:", e);
        formData.image = img;
        formData.identificationDocImg = identificationimg;
        formData.incomeDocImg = incomedocimg;
        console.log("profile :", img);

        dispatch(addUsers(data));

        toast.success("Successful!  👌");
        //toast.error("Error 🤯");
        reset(defaultValues);
        setImg("");
    }

    const handleProfileImg = (e) => {
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImg(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleIdentificationImg = (e) => {
        let file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setIdentificationImg(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleIncomeDocImg = (e) => {
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setIncomeDocImg(reader.result);
        };
        reader.readAsDataURL(file);
    };
    return (
        <div className="px-10">
            <div className="flex my-1">
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
            <form onSubmit={handleSubmit(onSubmitData)}>
                <Accordion>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">
                            {" "}
                            <div>
                                <h1 className="text-start font-bold  px-5 pt-5 whitespace-nowrap">Personal Details</h1>
                            </div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="grid sm:grid-cols-3 gap-5 px-5 shadow-lg">
                            <div className="grid  py-2">
                                <div>
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <input
                                            className=" w-[97%] outline-none"
                                            placeholder="UHID"
                                            name="uhid"
                                            {...register("uhid")}
                                        />
                                        {/* <SearchIcon /> */}
                                    </fieldset>
                                    <div className="font-semibold flex justify-start pb-1 text-red-600">
                                        {errors?.uhid?.message}
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    <div className="border-gray-700">
                                        <fieldset className="border border-gray-700 rounded">
                                            <select
                                                className="w-[97%] outline-none"
                                                name="prefix"
                                                {...register("prefix")}
                                            >
                                                <option selected={true} value="Prefix">
                                                    Prefix
                                                </option>
                                                <option value="mr">Mr</option>
                                                <option value="mrs">Mrs</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-span-2 border-gray-700">
                                        <fieldset className="border border-gray-700 rounded">
                                            <input
                                                className="w-[97%] outline-none"
                                                placeholder="First Name"
                                                name="firstname"
                                                {...register("firstname")}
                                            />
                                        </fieldset>
                                        <div className="font-semibold flex justify-start pb-1 text-red-600">
                                            {errors?.firstname?.message}
                                        </div>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-3 gap-2 my-2">
                                    <div className="col-span-2">
                                        <fieldset className="border border-gray-700 rounded">
                                            <input
                                                type="date"
                                                className="w-[97%] outline-none"
                                                name="dob"
                                                {...register("dob")}
                                            />
                                        </fieldset>
                                    </div>
                                    <div>
                                        <fieldset className="border border-gray-700 rounded">
                                            <input
                                                className="w-[97%] outline-none"
                                                placeholder="Age"
                                                name="age"
                                                {...register("age")}
                                            />
                                        </fieldset>
                                    </div>
                                </div>

                                <div>
                                    <fieldset className="border border-gray-700 rounded">
                                        <select
                                            className="w-[97%] outline-none"
                                            name="bloodgroup"
                                            {...register("bloodgroup")}
                                        >
                                            <option selected={true} value="Blood Group">
                                                Blood Group
                                            </option>
                                            <option>(A+)</option>
                                            <option>(A-)</option>
                                            <option>B (B+)</option>
                                            <option>B (B-)</option>
                                            <option>O (O+)</option>
                                            <option>O (O-)</option>
                                            <option>AB (AB+)</option>
                                            <option>AB (AB-)</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div>
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <select
                                            className="w-[97%] outline-none"
                                            name="identificationdoc"
                                            {...register("identificationdoc")}
                                        >
                                            <option selected={true} value="Identification Document">
                                                Identification Document
                                            </option>
                                            <option value="aadhar">Aadhar Card</option>
                                            <option value="pan">PAN Card</option>
                                        </select>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="grid py-2 ">
                                <div>
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <input
                                            className="w-[97%] outline-none"
                                            placeholder="Mobile Number"
                                            type="telephone"
                                            name="mobileno"
                                            {...register("mobileno")}
                                        />
                                    </fieldset>
                                </div>
                                <div>
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <input
                                            className="w-[97%] outline-none"
                                            placeholder="Middle Name"
                                            name="middlename"
                                            {...register("middlename")}
                                        />
                                    </fieldset>
                                </div>
                                <div className="grid sm:grid-cols-3 gap-2">
                                    <div>
                                        <fieldset className="border border-gray-700 my-2 rounded">
                                            <input
                                                className="w-[97%] outline-none"
                                                placeholder="Years"
                                                name="years"
                                                {...register("years")}
                                            />
                                        </fieldset>
                                    </div>
                                    <div>
                                        <fieldset className="border border-gray-700 my-2 rounded">
                                            <input
                                                className="w-[97%] outline-none"
                                                placeholder="Months"
                                                name="months"
                                                {...register("months")}
                                            />
                                        </fieldset>
                                    </div>
                                    <div>
                                        <fieldset className="border border-gray-700 my-2 rounded">
                                            <input
                                                className="w-[97%] outline-none"
                                                placeholder="Days"
                                                name="days"
                                                {...register("days")}
                                            />
                                        </fieldset>
                                    </div>
                                </div>
                                <div>
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <select
                                            className="w-[97%] outline-none"
                                            name="maritalstatus"
                                            {...register("maritalstatus")}
                                        >
                                            <option selected={true} value="Marital Status">
                                                Marital Status
                                            </option>
                                            <option value="un-married">Un-Married</option>
                                            <option value="married">Married</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div>
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <select
                                            className="w-[97%] outline-none"
                                            name="identificationno"
                                            {...register("identificationno")}
                                        >
                                            <option selected={true} value="Identification Number">
                                                Identification Number
                                            </option>
                                        </select>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-2 py-2">
                                <div className="grid col-span-2 ">
                                    <div>
                                        <fieldset className="border border-gray-700 my-2 rounded">
                                            <input
                                                type="email"
                                                className="w-[97%] outline-none"
                                                placeholder="Email Id"
                                                name="email"
                                                {...register("email")}
                                            />
                                        </fieldset>
                                    </div>
                                    <div>
                                        <fieldset className="border border-gray-700 my-2 rounded">
                                            <input
                                                className="w-[97%] outline-none"
                                                placeholder="Last Name"
                                                name="lastname"
                                                {...register("lastname")}
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="text-start font-semibold">
                                        <h1>Gender</h1>
                                    </div>
                                    <div className="sm:grid grid-cols-3">
                                        <div>
                                            <input type="radio" name="gender" value="male" {...register("gender")} />
                                            <label className="mx-1">Male</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="gender" value="female" {...register("gender")} />
                                            <label className="mx-1">Female</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="gender" value="other" {...register("gender")} />
                                            <label className="mx-1">Other</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <fieldset className="border border-gray-700 my-2 rounded">
                                                <select
                                                    className="w-[97%] outline-none"
                                                    name="nationality"
                                                    {...register("nationality")}
                                                >
                                                    <option selected={true} value="Nationality">
                                                        Nationality
                                                    </option>
                                                    <option value="us">United States</option>
                                                    <option value="china">China</option>
                                                    <option value="india">India</option>
                                                    <option value="japan">Japan</option>
                                                    <option value="germany">Germany</option>
                                                    <option value="uk">United Kingdom</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div>
                                        <fieldset className="border border-gray-700 my-2 rounded">
                                            <input
                                                type="file"
                                                className="w-[95%] outline-none size-full"
                                                name="identificationimg"
                                                //   {...register("identificationimg")}
                                                onChange={(e) => {
                                                    handleIdentificationImg(e);
                                                }}
                                            />
                                        </fieldset>
                                    </div>
                                </div>
                                <div className="sm:grid-rows-2 border border-gray-700 px-2 mx-2 my-2 py-2 rounded-lg">
                                    {img !== "" ? <img src={img} /> : <ProfileIcon />}

                                    <button
                                        className=""
                                        type="button"
                                        onClick={() => {
                                            imgref?.current?.click();
                                        }}
                                    >
                                        Upload Profile
                                    </button>
                                    <input
                                        className="hidden w-[100%] h-[50%] rounded-lg text-sm font-semibold"
                                        type="file"
                                        ref={imgref}
                                        name="profileimg"
                                        onChange={(e) => {
                                            handleProfileImg(e);
                                        }}
                                        //{...register("profileimg")}
                                    />
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">
                            {" "}
                            <div>
                                <h1 className="text-start font-bold  px-5 pt-5 whitespace-nowrap">Address Details</h1>
                            </div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="grid sm:grid-cols-3 gap-5 px-5 shadow-lg">
                            <div className="grid   my-2">
                                <input
                                    className="border border-gray-700 my-2 rounded"
                                    placeholder="House No./Flat No./Building Name"
                                    name="housedetails"
                                    {...register("housedetails")}
                                />
                                <input
                                    className="border border-gray-700 my-2 rounded"
                                    placeholder="State"
                                    name="state"
                                    {...register("state")}
                                />
                                <input
                                    className="border border-gray-700 my-2 rounded"
                                    placeholder="Area"
                                    name="area"
                                    {...register("area")}
                                />
                            </div>
                            <div className="grid my-2">
                                <input
                                    className="border border-gray-700 my-2 rounded"
                                    placeholder="Street Address"
                                    name="streetaddress"
                                    {...register("streetaddress")}
                                />
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select className="w-[97%] outline-none" name="district" {...register("district")}>
                                        <option selected={true} value="District">
                                            District
                                        </option>
                                        <option value="satara">Satara</option>
                                        <option value="pune">Pune</option>
                                        <option value="sangli">Mumbai</option>
                                    </select>
                                </fieldset>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select className="w-[97%] outline-none" name="tehsil" {...register("tehsil")}>
                                        <option selected={true} value="Tehsil">
                                            Tehsil
                                        </option>
                                        <option value="satara">Satara</option>
                                        <option value="pune">Pune</option>
                                        <option value="sangli">Mumbai</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="grid  my-2">
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select className="w-[97%] outline-none" name="country" {...register("country")}>
                                        <option selected={true} value="Country">
                                            Country
                                        </option>
                                        <option value="us">United States</option>
                                        <option value="china">China</option>
                                        <option value="india">India</option>
                                        <option value="japan">Japan</option>
                                        <option value="germany">Germany</option>
                                        <option value="uk">United Kingdom</option>
                                    </select>
                                </fieldset>
                                <input
                                    className="border border-gray-700 my-2 rounded"
                                    placeholder="Pin Code"
                                    name="pincode"
                                    {...register("pincode")}
                                />
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select className="w-[97%] outline-none" name="city" {...register("city")}>
                                        <option selected={true} value="City/Village/Town">
                                            City/Village/Town
                                        </option>
                                        <option value="satara">Satara</option>
                                        <option value="pune">Pune</option>
                                        <option value="sangli">Mumbai</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">
                            {" "}
                            <div>
                                <h1 className="text-start font-bold  px-5 pt-5 whitespace-nowrap">Income Details</h1>
                            </div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="grid sm:grid-cols-3 gap-5 px-5 shadow-lg">
                            <div>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="incomerange"
                                        {...register("incomerange")}
                                    >
                                        <option selected={true} value="Income Range">
                                            Income Range
                                        </option>
                                        <option value="#">Below 1 Lakhs</option>
                                        <option value="#">Between 1 Lakhs to 2 Lakhs</option>
                                        <option value="#">Between 2 Lakhs to 3 Lakhs</option>
                                        <option value="#">Between 3 Lakhs to 4 Lakhs</option>
                                        <option value="#">Between 4 Lakhs to 5 Lakhs</option>
                                        <option value="#">Above 5 Lakhs</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="incomedoc"
                                        {...register("incomedoc")}
                                    >
                                        <option selected={true} value="Income Document">
                                            Income Document
                                        </option>
                                        <option value="rc">Ration Card</option>
                                        <option value="sdf">Self declaration form</option>
                                        <option value="aadhar">Aadhaar card</option>
                                        <option value="ic">Income Certificate</option>
                                        <option value="f16">Form 16</option>
                                        <option value="tr">Tax return</option>
                                        <option value="pof">Proof of income</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div>
                                {" "}
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <input
                                        type="file"
                                        className="w-[97%] outline-none"
                                        name="incomedocimg"
                                        //{...register("incomedocimg")}
                                        onChange={(e) => {
                                            handleIncomeDocImg(e);
                                        }}
                                    />
                                </fieldset>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">
                            {" "}
                            <div>
                                <h1 className="text-start font-bold  px-5 pt-5 whitespace-nowrap">Refferal Info</h1>
                            </div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="grid sm:grid-cols-2 gap-5 px-5 shadow-lg">
                            <div>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="refferaltype"
                                        {...register("refferaltype")}
                                    >
                                        <option selected={true} value="Refferal Type">
                                            Refferal Type
                                        </option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="doctorname"
                                        {...register("doctorname")}
                                    >
                                        <option selected={true} value="Doctor Name">
                                            Doctor Name
                                        </option>
                                        <option value="ps">Dr.Pratik Sabale (MD)</option>
                                        <option value="gs">Dr.Gayatri Sontakke (MBBS)</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">
                            {" "}
                            <div>
                                <h1 className="text-start font-bold  px-5 pt-5 whitespace-nowrap">Visit Details</h1>
                            </div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="shadow-lg">
                            <div className="grid sm:grid-cols-3 gap-5 px-5 my-2 ">
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <input
                                        type="date"
                                        className="w-[97%] outline-none"
                                        name="dateofvisit"
                                        {...register("dateofvisit")}
                                    />
                                </fieldset>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="patientsource"
                                        {...register("patientsource")}
                                    >
                                        <option selected={true} value="Patient Source">
                                            Patient Source
                                        </option>
                                    </select>
                                </fieldset>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="visittype"
                                        {...register("visittype")}
                                    >
                                        <option selected={true} value="Visit Type">
                                            Visit Type
                                        </option>
                                        <option value="online">Online</option>
                                        <option value="offline">Offline</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-5 px-5 my-2">
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="patientcategory"
                                        {...register("patientcategory")}
                                    >
                                        <option selected={true} value="Patient Category">
                                            Patient Category
                                        </option>
                                        <option value="#">Patients with immediate problems</option>
                                        <option value="#">Patients for check-ups and routine visits</option>
                                        <option value="#">Patients looking to switch practices</option>
                                        <option value="#">Geriatric patients</option>
                                        <option value="#">Anxious patients</option>
                                        <option value="#">Skeptical patients</option>
                                    </select>
                                </fieldset>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="department"
                                        {...register("department")}
                                    >
                                        <option selected={true} value="Department">
                                            Department
                                        </option>
                                        <option value="#">Patients with immediate problems</option>
                                        <option value="#">Patients for check-ups and routine visits</option>
                                        <option value="#">Patients looking to switch practices</option>
                                        <option value="#">Geriatric patients</option>
                                        <option value="#">Anxious patients</option>
                                        <option value="#">Skeptical patients</option>
                                    </select>
                                </fieldset>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select className="w-[97%] outline-none" name="cabin" {...register("cabin")}>
                                        <option selected={true} value="Cabin">
                                            Cabin
                                        </option>
                                        <option value="#">General ward</option>
                                        <option value="Twin Sharing">Twin sharing</option>
                                        <option value="#">Sharing</option>
                                        <option value="#">Single AC</option>
                                        <option value="#">Deluxe room</option>
                                        <option value="#">Sweet room</option>
                                        <option value="#">ICU (intensive care unit)</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-5 px-5 my-2">
                                <div>
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <select className="w-[97%] outline-none" name="doctor" {...register("doctor")}>
                                            <option selected={true} value="Doctor">
                                                Doctor
                                            </option>
                                            <option value="ps">Dr.Pratik Sabale (MD)</option>
                                            <option value="gs">Dr.Gayatri Sontakke (MBBS)</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div className="col-span-2 my-2 ">
                                    <fieldset className="border border-gray-700 rounded">
                                        <input
                                            className="w-[97%] outline-none"
                                            placeholder="Complaints/Reasons"
                                            name="reasons"
                                            {...register("reasons")}
                                        />
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                        <Typography component="span">
                            {" "}
                            <div>
                                <h1 className="text-start font-bold  px-5 pt-5 whitespace-nowrap">
                                    Representative Info
                                </h1>
                            </div>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="shadow-lg">
                            <div className="grid sm:grid-cols-3 gap-5 px-5 my-2">
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <input
                                        className="w-[97%] outline-none"
                                        placeholder="Name Of Representative"
                                        name="nameofrepresentative"
                                        {...register("nameofrepresentative")}
                                    />
                                </fieldset>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <input
                                        className="w-[97%] outline-none"
                                        placeholder="Mobile Of Representative"
                                        name="mobileofrepresentative"
                                        {...register("mobileofrepresentative")}
                                    />
                                </fieldset>
                                <fieldset className="border border-gray-700 my-2 rounded">
                                    <select
                                        className="w-[97%] outline-none"
                                        name="relationship"
                                        {...register("relationship")}
                                    >
                                        <option selected={true} value="Relationship">
                                            Relationship to patient
                                        </option>
                                        <option value="mother">Mother</option>
                                        <option value="father">Father</option>
                                        <option value="brother">Brother</option>
                                        <option value="sister">Sister</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="grid sm:grid-cols-3 px-5 gap-5">
                                <div className="col-span-2">
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <input
                                            className="w-[97%] outline-none"
                                            placeholder="Address"
                                            name="address"
                                            {...register("address")}
                                        />
                                    </fieldset>
                                </div>
                                <div>
                                    <fieldset className="border border-gray-700 my-2 rounded">
                                        <select
                                            className="w-[97%] outline-none"
                                            name="village"
                                            {...register("village")}
                                        >
                                            <option selected={true} value="Village">
                                                City/Village/Town
                                            </option>
                                            <option value="satara">Satara</option>
                                            <option value="pune">Pune</option>
                                            <option value="sangli">Mumbai</option>
                                        </select>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <div className="flex my-4 gap-5">
                    <div>
                        <Button type="submit" color="success" variant="contained">
                            Submit
                        </Button>
                    </div>
                    <div>
                        <Button
                            type="button"
                            color="info"
                            variant="contained"
                            onClick={() => {
                                navigate("/formalldata");
                            }}
                        >
                            All Data
                        </Button>
                    </div>
                    <div>
                        <Button
                            type="button"
                            color="error"
                            variant="contained"
                            onClick={() => {
                                reset();
                            }}
                        >
                            Reset
                        </Button>
                    </div>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
}

export default Form1Demo;
