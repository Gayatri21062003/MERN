import React from "react";
import {useNavigate} from "react-router-dom";
import { CommonButton } from "../../CommonComponents/CommonButton";

function Products() {
    const navigate = useNavigate();

    function backHome() {
        navigate("/");
    }
    return (
        <div>
            <div className="text-center font-bold">Products</div>
            <CommonButton
            label="Go Back "
            type="button"
            onClick={() => {
                navigate("/");
            }}
        />
    
        </div>
    );
}

export default Products;
