import React, {useContext} from "react";
import {FirstContext} from "./ContextParent";

export default function ContextChildOne() {
    const {name} = useContext(FirstContext);

    return (
        <div>
            <div className="font-medium my-3">Context Child One</div>
            <h4 className="font-semibold bg-emerald-400 mx-96 rounded">{name}</h4>
        </div>
    );
}
