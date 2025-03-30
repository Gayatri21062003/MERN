import {Button, TextField} from "@mui/material";
import React from "react";
import {useForm} from "react-hook-form";
import {CommonButton} from "../../CommonComponents/CommonButton";
import {useNavigate} from "react-router-dom";

function RegistrationForm() {
    const defaultValues = {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        contact: "",
        birthdate: "",
        gender: "",
        address: "",
        profile: "",
    };

    // const [password, setPassword] = React.useState(false);
    const navigate = useNavigate();

    const {handleSubmit, register, reset} = useForm({defaultValues: defaultValues, mode: "onChange"});
    const allData = (data) => {
        console.log("All data is:", data);
    };

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
            <form onSubmit={handleSubmit(allData)}>
                <div className="grid items-center  mx-60 my-10  rounded-md text-2xl font-semibold">
                    <p>User Registration Form</p>
                </div>
                <fieldset className="grid border border-black mx-60 my-12 p-5 bg-violet-200 rounded-md">
                    <div className="grid sm:grid-cols-2 p-3">
                        <div>
                            <TextField name="name" {...register("name")} label="Name" className="hover:bg-slate-50" />
                        </div>
                        <div>
                            <TextField
                                name="email"
                                {...register("email")}
                                label="Email ID"
                                className="hover:bg-slate-50"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 p-3">
                        <div>
                            <TextField
                                name="password"
                                {...register("password")}
                                label="Passowrd"
                                type="password"
                                className="hover:bg-slate-50"
                            />
                        </div>
                        <div>
                            <TextField
                                name="confirmpassword"
                                {...register("confirmpassword")}
                                label="Confirm Password"
                                type="password"
                                className="hover:bg-slate-50"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 p-3">
                        <div>
                            <TextField
                                name="contact"
                                {...register("contact")}
                                label="Contact"
                                className="hover:bg-slate-50"
                            />
                        </div>
                        <div>
                            <TextField
                                name="birthdate"
                                {...register("birthdate")}
                                type="date"
                                sx={{width: "45%"}}
                                className="hover:bg-slate-50"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 p-3">
                        <div>
                            <TextField
                                name="gender"
                                {...register("gender")}
                                label="Gender"
                                className="hover:bg-slate-50"
                            />
                        </div>
                        <div>
                            <TextField
                                name="address"
                                {...register("address")}
                                label="Address"
                                className="hover:bg-slate-50"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 p-3">
                        <div>
                            <TextField
                                name="profile"
                                {...register("profile")}
                                type="file"
                                sx={{width: "45%"}}
                                className="hover:bg-slate-50"
                            />
                        </div>
                        <div className="flex justify-center gap-5">
                            <div>
                                <Button type="submit" color="success" variant="contained">
                                    Submit
                                </Button>
                            </div>
                            <div>
                                <Button
                                    color="error"
                                    variant="outlined"
                                    onClick={() => {
                                        reset();
                                    }}
                                >
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default RegistrationForm;

// import React from "react";
// import {useForm} from "react-hook-form";
// import * as yup from "yup";
// import {yupResolver} from "@hookform/resolvers/yup";
// import {ContactIcon, UploadIcon} from "../../CommonComponents/CommonAssets";
// import {TextField} from "@mui/material";

// export default function RegistrationForm() {
//     const [users, setUsers] = React.useState([]);
//     const [img, setImg] = React.useState("");

//     const fileref = React.useRef();

//     const errorObject = yup.object().shape({
//         fullname: yup
//         .string()
//         .required()
//         .matches(/^[a-zA-Z]/),
//     });

//     const defaultValues = {
//         fullname: "",
//         username: "",
//         email: "",
//         contact: "",
//         password: "",
//         confirmpassword: "",
//         gender: "",
//         birthdate: "",
//         aadharnumber: "",
//         panid: "",
//         courses: "",
//         nationality: "",
//         address: "",
//     };

//     const {handleSubmit, register} = useForm({
//         defaultValues: defaultValues,
//     });
//     function onSubmitData(data) {
//         console.log("Data From the form is:", data);
//         let dataArray = [...users];
//         dataArray.push(data);
//         setUsers(dataArray);
//     }
//     const handleImage = (e) => {
//         let file = e.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setImg(reader.result);
//         };

//         reader.readAsDataURL(file);
//         console.log("Image is :", e.target.files[0]);
//     };

//     return (
//         <div>
//             <div className="text-center border border-black mx-60 my-5 py-5 text-white bg-black font-bold text-2xl">
//                 Student Registration Form
//             </div>

//             <div className="grid grid-cols-2 border mx-60 h-80">
//                 <div className="border">
//                     <div className="border h-16 my-3 mx-3">
//                         <TextField name="name" label="Name" />
//                     </div>
//                     <div className="border flex h-10 my-3 mx-3">
//                         <label>Upload Image : </label>
//                         <button
//                             className="ml-10  "
//                             type="button"
//                             onClick={() => {
//                                 fileref.current.click();
//                             }}
//                         >
//                             <UploadIcon />
//                         </button>
//                         <input
//                             type="file"
//                             className="hidden"
//                             ref={fileref}
//                             onChange={(e) => {
//                                 handleImage(e);
//                             }}
//                         />
//                     </div>
//                     <div className="border h-10 my-3 mx-3"></div>
//                     <div className="border h-10 my-3 mx-3"></div>
//                     <div className="border h-10 my-3 mx-3"></div>
//                 </div>
//                 <div className="border">
//                     <div className="border h-10 my-3 mx-3">
//                         <label>Email ID : </label>
//                         <input type="email" placeholder="Enter Email ID" />
//                     </div>
//                     <div className="border h-10 my-3 mx-3"></div>
//                     <div className="border h-10 my-3 mx-3"></div>
//                     <div className="border h-10 my-3 mx-3"></div>
//                     <div className="border h-10 my-3 mx-3"></div>
//                 </div>
//             </div>
//             <div className="flex justify-center">
//                 <img src={img} alt="Image" className="size-60 rounded-full" />
//             </div>
//         </div>
//     );
// }
