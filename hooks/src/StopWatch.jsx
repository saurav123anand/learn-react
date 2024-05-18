import { useEffect, useRef, useState } from "react";


function StopWatch(){
    const [isRunning,setIsRunning]=useState(false);
    const [elapsedTime,setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current=setInterval(() => {
                setElapsedTime(Date.now()-startTimeRef.current);
            }, 10);
        }
        return ()=>{
            clearInterval(intervalIdRef.current);
        }

    },[isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;

    }
    function stop(){
        setIsRunning(false);

    }
    function reset(){
       setElapsedTime(0);
       setIsRunning(false);
    }
    function formatTime(){
        let hours=Math.floor(elapsedTime/(1000*60*60));
        let minutes=Math.floor(elapsedTime/(1000*60)%60);
        let seconds=Math.floor(elapsedTime/(1000)%60);
        let milliSeconds=Math.floor((elapsedTime%1000)/10);
        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliSeconds=String(milliSeconds).padStart(2,"0");
        return `${minutes}:${seconds}:${milliSeconds}`;

    }
    return(
        <>

        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-btn">start</button>
                <button onClick={stop} className="stop-btn">stop</button>
                <button onClick={reset} className="reset-btn">reset</button>
            </div>
        </div>
        
        </>
    )

}
export default  StopWatch;