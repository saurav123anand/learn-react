

// useState() -- - Re-renders the component when the state value changes.
// // useRef() - "use Reference" Does not cause re-renders when its value changes. 
//               When you want a component to "remember" some information,
//               but you don't want that information to trigger new renders.
// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions

import { useEffect, useRef, useState } from "react";

// 3. Managing Timers and Intervals
function UseRefHook() {
    //  const [number,setNumber]=useState(0);

    // using useRef
    const ref = useRef(0);

    useEffect(() => console.log("component re-rendered"))

    //  function handleClick(){
    //      setNumber(n=>n+1);
    //  }
    function handleClick() {
        ref.current+=1;
        console.log(ref.current)
    }
    return (
        <>
            <button onClick={handleClick}>click me</button>

        </>
    )
}
export default UseRefHook;