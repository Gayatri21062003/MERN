import React, {useContext} from "react";
import Form1Demo, {AllData} from "./Form1Demo";
import {useSelector} from "react-redux";
import {CloseIcon, ViewIcon} from "../CommonComponents/CommonAssets";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

function FormAllData() {
    const userInfo = useSelector((state) => state?.firstreducer?.userInfo);
    const [dialogue, setDialogue] = React.useState(false);
    const [profileimageSource, setprofileimageSource] = React.useState("");
    const [identificationDocImgSource, setIdentificationDocImgSource] = React.useState("");
    const [incomedocimgSource, setIncomeDocImgSource] = React.useState("");
    const navigate = useNavigate();
    console.log("The information of user is :", userInfo);

    React.useEffect(() => {
        if (profileimageSource !== "") {
            setDialogue(true);
        }
    }, [profileimageSource]);

    React.useEffect(() => {
        if (identificationDocImgSource !== "") {
            setDialogue(true);
        }
    }, [identificationDocImgSource]);

    React.useEffect(() => {
        if (incomedocimgSource !== "") {
            setDialogue(true);
        }
    }, [incomedocimgSource]);

    return (
        <div className="px-2 py-2">
            <div className="flex mx-2 my-2">
                <Button
                    type="button"
                    color="inherit"
                    variant="contained"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Back
                </Button>
            </div>
            <div className="font-semibold text-2xl py-2">Form All Data</div>
            <table className="border border-gray-800">
                <thead>
                    <tr>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">UHID</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Mobile NO.</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Email</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Prefix</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">First Name</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Middle Name</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Last Name</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">DOB</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Age</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Years</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Months</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Days</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Gender</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Blood Group</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Nationality</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Profile Img</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                            Identification Doc
                        </td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                            Identification No
                        </td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                            Identification Doc Img
                        </td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">House Details</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Street Address</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Country</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">State</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">District</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Pin Code</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Area</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Tehsil</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">City</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Income Range</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                            Income Document
                        </td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Income Doc Img</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Refferal Type</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Doctor Name</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Date Of Visit</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Patient Source</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Visit Type</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                            Patient Category
                        </td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Department</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Cabin</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Doctor</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Reasons</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                            Name of Representative
                        </td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                            Mobile of Representative
                        </td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Relationship</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Address</td>
                        <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">Village</td>
                    </tr>
                </thead>
                <tbody>
                    {userInfo?.length > 0
                        ? userInfo.map((user, userIndex) => {
                              return (
                                  <tr key={userInfo}>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.uhid}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.mobileno}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.email}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.prefix}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.firstname}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.middlename}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.lastname}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.dob}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.age}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.years}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.months}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.days}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.gender}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.bloodgroup}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.nationality}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          <button
                                              type="button"
                                              onClick={() => {
                                                  setprofileimageSource(user?.image);
                                              }}
                                          >
                                              <ViewIcon />
                                          </button>
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.identificationdoc}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.identificationno}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          <button
                                              type="button"
                                              onClick={() => {
                                                  setIdentificationDocImgSource(user?.identificationDocImg);
                                              }}
                                          >
                                              <ViewIcon />
                                          </button>
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.housedetails}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.streetaddress}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.country}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.state}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.district}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.pincode}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.area}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.tehsil}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.city}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.incomerange}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.incomedoc}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          <button
                                              type="button"
                                              onClick={() => {
                                                  setIncomeDocImgSource(user?.incomeDocImg);
                                              }}
                                          >
                                              <ViewIcon />
                                          </button>
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.refferaltype}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.doctorname}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.dateofvisit}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.patientsouce}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.visittype}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.patientcategory}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.department}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.cabin}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.doctor}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.reasons}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.nameofrepresentative}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.mobileofrepresentative}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.relationship}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.address}
                                      </td>
                                      <td className="border border-gray-700  px-2 whitespace-nowrap font-semibold">
                                          {user?.village}
                                      </td>
                                  </tr>
                              );
                          })
                        : ""}
                </tbody>
            </table>

            <dialog open={dialogue}>
                <p>The Uploaded Image Will Be :</p>
                <img src={profileimageSource} />
                <button
                    type="button"
                    onClick={() => {
                        setDialogue(false);
                        setprofileimageSource("");
                    }}
                >
                    <CloseIcon />
                </button>
            </dialog>
            <dialog open={dialogue}>
                <img src={identificationDocImgSource} />
                <button
                    type="button"
                    onClick={() => {
                        setDialogue(false);
                        setIdentificationDocImgSource("");
                    }}
                >
                    <CloseIcon />
                </button>
            </dialog>
            <dialog open={dialogue}>
                <img src={incomedocimgSource} />
                <button
                    type="button"
                    onClick={() => {
                        setDialogue(false);
                        setIncomeDocImgSource("");
                    }}
                >
                    <CloseIcon />
                </button>
            </dialog>
        </div>
    );
}

export default FormAllData;
