import React from "react";
import {useNavigate} from "react-router-dom";
import {CommonButton} from "../../CommonComponents/CommonButton";

function Products() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-center font-semibold text-xl">Products</div>
            <div className="flex mx-2 my-2">
                <CommonButton
                    label="BACK"
                    type="button"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>
        </div>
    );
}

export default Products;
