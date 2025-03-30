import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ErrorPage from "./ErrorPage";
import ReactForm from "./ReactForm";
import ReactHookForm from "./ReactHookForm";
import RegistrationForm from "./RegistrationForm";
import StateVariables from "../StateVariables";
import Arithmetic from "../Arithmetic";
import Calculate from "../Calculate";
import ContextParent from "../ContextAPI/ContextParent";
import Parent from "../../PropsAndCallback/Parent";
import ClassParent from "../../ReactClassComponents/ClassParent";
import UseReducer from "../../ReactClassComponents/UseReducer";
import ReduxHome from "../../redux/ReduxHome";
import PageOne from "../../redux/PageOne";
import Form1Demo from "../../Forms/Form1Demo";
import FormAllData from "../../Forms/FormAllData";
import ParentForm from "../UseFormContext/ParentForm";

function MainLayout() {
    return (
        <div>
            <div className="flex-nowraptext-center font-bold bg-emerald-900">Main Layout</div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/reactform" element={<ReactForm />} />
                    <Route path="/reacthookform" element={<ReactHookForm />} />
                    <Route path="/registrationform" element={<RegistrationForm />} />
                    <Route path="/statevariables" element={<StateVariables />} />
                    <Route path="/arithmetic" element={<Arithmetic />} />
                    <Route path="/calculate" element={<Calculate />} />
                    <Route path="/parent" element={<Parent />} />
                    <Route path="/contextparent" element={<ContextParent />} />
                    <Route path="/classparent" element={<ClassParent />} />
                    <Route path="/usereducer" element={<UseReducer />} />
                    <Route path="/reduxhome" element={<ReduxHome />} />
                    <Route path="/pageone" element={<PageOne />} />
                    <Route path="/form1demo" element={<Form1Demo />} />
                    <Route path="/formalldata" element={<FormAllData />} />
                    <Route path="/parentform" element={<ParentForm />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;
