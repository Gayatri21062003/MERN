import React from "react";
import StateVariables from "./StateVariables";
import Parent from "../PropsAndCallback/Parent";
import ContextParentArray from "./ContextAPI/ContextParentArray";
import ContextParent from "./ContextAPI/ContextParent";
import Incre from "../MyOwnTasks/Incre";




function MainApp(){

    return(
        <div>
            <div className="font-bold">MainApp</div>

            <fieldset style={{
                border:"1px solid black",
                borderRadius:"10px",
                marginLeft:"10px",
                marginRight:"10px",
                paddingLeft:"5px",
                paddingRight:"5px",
                marginTop:"10px"
            }} >
                <legend style={{
                    marginLeft:"25px",
                    fontWeight:"bold",
                    fontSize:"15px"
                }}>Learning State Variables</legend>
                <div>
                    <StateVariables/>
                                   </div>
            </fieldset>

            <fieldset style={{
                border:"1px solid black",
                borderRadius:"10px",
                marginLeft:"10px",
                marginRight:"10px",
                paddingLeft:"5px",
                paddingRight:"5px",
                marginTop:"10px"
            }} >
                <legend style={{
                    marginLeft:"25px",
                    fontWeight:"bold",
                    fontSize:"15px"
                }}>Props and CallBack</legend>
                <div>
                    <Parent/>
                                   </div>
            </fieldset>

            <fieldset style={{
                border:"1px solid black",
                borderRadius:"10px",
                marginLeft:"10px",
                marginRight:"10px",
                paddingLeft:"5px",
                paddingRight:"5px",
                marginTop:"10px"
            }} >
                <legend style={{
                    marginLeft:"25px",
                    fontWeight:"bold",
                    fontSize:"15px"
                }}>Context API</legend>
                <div>
                    <ContextParent/>
                 </div>
            </fieldset>

            <fieldset style={{
                border:"1px solid black",
                borderRadius:"10px",
                marginLeft:"10px",
                marginRight:"10px",
                paddingLeft:"5px",
                paddingRight:"5px",
                marginTop:"10px"
            }} >
                <legend style={{
                    marginLeft:"25px",
                    fontWeight:"bold",
                    fontSize:"15px"
                }}>Context API Task</legend>
            <div>
                <ContextParentArray/>
                     </div>
            </fieldset>

            <fieldset style={{
                border:"1px solid black",
                borderRadius:"10px",
                marginLeft:"10px",
                marginRight:"10px",
                paddingLeft:"5px",
                paddingRight:"5px",
                marginTop:"10px"
            }} >
                <legend style={{
                    marginLeft:"25px",
                    fontWeight:"bold",
                    fontSize:"15px"
                }}>Increment task</legend>
            <div>
                <Incre/>
                     </div>
            </fieldset>
        </div>
    )
}

export default MainApp