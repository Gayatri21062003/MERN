import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import StateVariables from "../StateVariables";
import Calculate from "../Calculate";
import Arithmetic from "../Arithmetic";
import Parent from "../../PropsAndCallback/Parent";
import ContextParent from "../ContextAPI/ContextParent";
import ContextParentArray from "../ContextAPI/ContextParentArray";

function MainLayoutOne() {
    return (
        <div>
            <div className="text-center font-bold bg-emerald-900">MainLayoutOne</div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/statevariables" element={<StateVariables />} />
                    <Route path="/calculate" element={<Calculate />} />
                    <Route path="/arithmetic" element={<Arithmetic />} />
                    <Route path="/parent" element={<Parent />} />
                    <Route path="/contextparent" element={<ContextParent />} />
                    <Route path="/contextparentarray" element={<ContextParentArray />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainLayoutOne;
