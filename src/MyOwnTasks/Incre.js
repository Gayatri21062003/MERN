import {useState} from "react";
import ChildCom from "./ChildCom";

export default function Incre() {
    const [count, setCount] = useState(0);

    function AddVal() {
        setCount((count) => count + 1);
    }
    function RemoveVal() {
        setCount((count) => count - 1);
    }

    return (
        <div>
            <h4>Let's The Value is: {count}</h4>
            <button type="button" onClick={AddVal}>
                INCREMENT
            </button>
            <button type="button" onClick={RemoveVal}>
                DECREMENT
            </button>
            <div>
                <ChildCom count={count}/>
            </div>
        </div>
    );
}
