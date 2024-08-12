import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import ErrorPage from "./ErrorPage";
import ReactForm from "./ReactForm";
import ReactHookForm from "./ReactHookForm";
import RegistrationForm from "./RegistrationForm";

function MainLayout() {
    return (
        <div>
            <div className="text-center font-bold bg-emerald-900">Main Layout</div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/reactform" element={<ReactForm/>}/>
                    <Route path="/reacthookform" element={<ReactHookForm/>}/>
                    <Route path="/registrationform" element={<RegistrationForm/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;
