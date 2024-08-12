import React,{useContext} from "react";
import { FirstContext } from "./ContextParent";

export default function ContextChildOne()
{
    const{name}=useContext(FirstContext);

    return(
        <div>
            <div>Context Child One</div>
            <h4>{name}</h4>
        </div>
    );
}