import React from "react";
import {string} from "yup";

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
            count: previousState.count - 1,
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
                <div className="flex justify-center font-bold my-2">Class Component</div>
                <div className="flex justify-center my-3">{this.state.count}</div>
                <div className="flex justify-center my-3">{this.state.string}</div>
                <div className="flex gap-5 my-5 ">
                    <button
                        className="border px-5 ml-[37%] rounded-sm bg-slate-100"
                        type="button"
                        onClick={this.increment}
                    >
                        Increment
                    </button>
                    <button className="border px-5 rounded-sm bg-slate-100" type="button" onClick={this.decrement}>
                        Decrement
                    </button>
                    <button
                        className="border px-5 rounded-sm bg-slate-100"
                        type="button rounded-sm"
                        onClick={this.addString}
                    >
                        Add String
                    </button>
                </div>
            </div>
        );
    }
}

export default ClassParent;
