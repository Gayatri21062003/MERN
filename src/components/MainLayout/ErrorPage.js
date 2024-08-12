import React from "react";

export default function ErrorPage() {
    return (
        <div>
            <label className="flex justify-center my-32 text-xl font-semibold text-red-600">
                Error Occured
            </label>
            <div className="flex gap-2 items-center mt-10 justify-center ">
                <span className="text-2xl font-semibold text-sky-600">404</span>
                <span className="text-2xl font-semibold text-red-600">
                    Page Not Found..!
                </span>
            </div>
        </div>
    );
}
