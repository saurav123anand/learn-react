// import { useState,useEffect } from "react";
import useLocalStorage from "./useLocalStorage";


export default function Reset(){
  const {email,setEmail}=useLocalStorage();

    // const [email,setEmail] = useState("");
    // useEffect(()=>{
    //   const email = localStorage.getItem("email");
    //   if(email){
    //       setEmail(email);
    //   }
    // },[]);
  
    // useEffect(() => {
    //     localStorage.setItem("email", email);
    // },[email]);
    
    return(
        <>
        <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>      
      <br />
        </>
    )
}