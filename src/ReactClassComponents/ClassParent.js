import React from "react";
import {string} from "yup";
import {CloudIcon, CollegeIcon} from "../CommonComponents/CommonAssets";
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

class ClassParent extends React.Component {
    constructor(props) {
        //props - properties provided by constructor and handled by super
        super(props); //super - to control initial state
        this.state = {
            count: 0,
            string: "",
        };
    }

    increment = () => {
        this.setState((previousState) => ({
            count: previousState.count + 1,
        }));
    };

    decrement = () => {
        this.setState((previousState) => ({
            count: previousState.counthandleNavigate - 1,
        }));
    };

    addString = () => {
        this.setState((previousState) => ({
            string: previousState.string + "Hello Gayatri..!",
        }));
    };

    componentDidMount() {
        console.log("Component Is Mounted..");
    }

    shouldComponentUpdate() {
        console.log("Component Updated..");
        return true;
    }

    render() {
        return (
            <div>
                <div className="flex mx-3 my-3">
                    <Button type="button" variant="contained" color="inherit" onClick={() => {}}>
                        Back
                    </Button>
                </div>
                <div className="border border-blue-700 mx-60 rounded-md bg-blue-50">
                    <div className="flex justify-center font-semibold my-2 text-xl">Class Component</div>
                    <div className="flex justify-center my-3">{this.state.count}</div>
                    <div className="flex justify-center my-3">{this.state.string}</div>
                    <div className="flex gap-5 my-5 justify-center ">
                        <Button type="button" variant="contained" color="inherit" onClick={this.increment}>
                            Increment
                        </Button>
                        <Button type="button" variant="contained" color="inherit" onClick={this.decrement}>
                            Decrement
                        </Button>
                        <Button type="button rounded-sm" variant="contained" color="inherit" onClick={this.addString}>
                            Add String
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassParent;
