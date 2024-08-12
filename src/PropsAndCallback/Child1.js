import React from "react";

export default function Child1(props)
{




    return(
        <div>
            <div>Child One</div>
            <button type="button" onClick={()=>{props.setBoolean(false)}}>
        
            </button>
        </div>
    )
}
