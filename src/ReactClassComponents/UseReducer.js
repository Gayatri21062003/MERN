import React from "react";
import {CommonButton} from "../CommonComponents/CommonButton";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ClassParent from "./ClassParent";

function UseReducer() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex mx-2 my-2">
                <Button
                    type="button"
                    variant="contained"
                    color="inherit"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Back
                </Button>
            </div>
            <div className="flex justify-center font-bold">Use Reducer Hook....!</div>
            <div className="flex justify-center my-5 font-semibold">The Changing count is :</div>
            <div className="flex justify-center font-semibold">The Changing State is :</div>

            <div className=" grid lg:grid-cols-4 gap-3 px-40 mx-10 my-5">
                <div>
                    <Button type="button" variant="outlined">
                        Addition
                    </Button>
                </div>
                <div>
                    <Button type="button" variant="outlined">
                        Substract
                    </Button>
                </div>
                <div>
                    <Button type="button" variant="outlined">
                        Multiply
                    </Button>
                </div>
                <div>
                    <Button type="button" variant="outlined">
                        Division
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default UseReducer;

// import React from "react";

// const UseReducer = () => {
//   const [number, setNumber] = React.useState(0);

//   const array = [1, 2, 3, 4, 5];

//   React.useEffect(() => {
//     let filtered = array.filter((item) => item === 4); // to filter the multiple objects or elements in single array

//     let finded = array.find((item) => item === 4);

//     console.log("filtered Array :", filtered);

//     console.log("finded value is :", finded);
//   }, []); // componentDidMount effect/ lifecycle method

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       //   if (number < 10) {
//       setNumber(number + 1);
//       //   }
//     }, 1000);

//     return () => clearInterval(interval); // to clear the interval after the action performed
//   }, [number]);

//   React.useEffect(() => {
//     if (number === 10 || number === 20 || number === 30) {
//       alert("The Number changed..!!");
//     }
//   }, [number]);

//   const initialState = 0;

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "add": {
//         return (state = state + action.payload);
//       }

//       case "substract": {
//         return (state = state - action.payload);
//       }

//       case "multiply": {
//         return (state = state * action.payload);
//       }
//     }
//   };

//   // redux toolkit

//   const [state, dispatch] = React.useReducer(reducer, initialState); // defualt statement

//   const addNumber = (arg) => {
//     setNumber(number + arg);

//     const timeout = setTimeout(() => {
//       dispatch({ type: "multiply", payload: 10 });
//     }, 5000);

//     return () => clearTimeout(timeout);
//   };

//   const substractNumber = (arg) => {
//     setNumber(number - arg);
//   };

//   const multiplyNumber = (arg) => {
//     setNumber(number * arg);
//   };

//   const divideNumber = (arg) => {
//     setNumber(number / arg);
//   };

//   return (
//     <div>
//       <div>Use Reducer Hook..!!</div>
//       <div className="my-5 text-xl font-bold flex justify-center">
//         The changing Count is :{number}
//       </div>

//       <div className="my-5 text-xl font-bold flex justify-center">
//         The changing State is :{state}
//       </div>

//       <div className="grid grid-cols-4 gap-5 px-32">
//         <div>
//           <button
//             className="border border-gray-400 rounded-lg p-4 bg-purple-500 text-white"
//             type="button"
//             onClick={() => {
//               addNumber(5);
//               dispatch({ type: "add", payload: 5 });
//             }}
//           >
//             Add
//           </button>
//         </div>
//         <div>
//           <button
//             className="border border-gray-400 rounded-lg p-4 bg-purple-500 text-white"
//             type="button"
//             onClick={() => {
//               substractNumber(4);
//               dispatch({ type: "substract", payload: 2 });
//             }}
//           >
//             Substract
//           </button>
//         </div>
//         <div>
//           <button
//             className="border border-gray-400 rounded-lg p-4 bg-purple-500 text-white"
//             type="button"
//             onClick={() => {
//               multiplyNumber(5);
//             }}
//           >
//             Multiply
//           </button>
//         </div>
//         <div>
//           <button
//             className="border border-gray-400 rounded-lg p-4 bg-purple-500 text-white"
//             type="button"
//             onClick={() => {
//               divideNumber(2);
//             }}
//           >
//             Divide
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default UseReducer;
