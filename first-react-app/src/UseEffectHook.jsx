
// useEffect()=////React Hook that tells React DO SOME CODE WHEN (pick one): 
//This component re-renders
//This component mountsThe state of a value

import { useEffect, useState } from "react";

// useEffect(function, [dependencies])
// 1. useEffect(() => {}) // Runs after every re-render 
// 2. useEffect (() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts



function UseEffectHook() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(()=>{
    //     document.title=`count: ${count}`
    // })

    // useEffect(()=>{
    //     document.title=`count: ${count}`
    // },[])

    // useEffect(()=>{
    //     document.title=`count: ${count} ${color}`
    // },[count,color])


    // function addCount(){
    //     setCount(c=>c+1);
    // }
    // function subCount(){
    //     setCount(c=>c-1);
    // }
    // function changeColor(){
    //     setColor(c=> c==="green" ? "red" : "green");
    // }
    // return(
    //     <>
    //     <p style={{color:color}}>count: {count}</p>
    //     <button onClick={addCount}>add</button>
    //     <button onClick={subCount}>sub</button> <br />
    //     <button onClick={changeColor}>change color</button>
    //     </>
    // )


    // NEXT EXAMPLE 
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("evevnt listener added");

        // clean up code 
        return ()=>{
            window.removeEventListener("resize",handleResize);
            console.log("event listener removed")
        }
    }, [])
    useEffect(() => {
        document.title=`size ${width}X${height}`
    }, [width,height])
    function handleResize() {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth);
    }

    return (
        <div>
            <p>window width: {width}px</p>
            <p>window height: {height}px</p>
        </div>

    )

}
export default UseEffectHook;