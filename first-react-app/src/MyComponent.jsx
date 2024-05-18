// useState()--> it updates the value in virtual DOM.
// React hooks--> special function that allows functional components to use react features without writing class components 

import { useState } from 'react';

// (useState,useEffect,useContext,useReducer,useCallback and more...)
function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Saurav")
    }
    const updateAge = () => {
        setAge(age + 1);
    }
    const toggleIsEmployedStatus=()=>{
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
           <p>Name : {name}</p>
           <button onClick={updateName}>Set name</button>
           <p>Age : {age}</p>
           <button onClick={updateAge}>Set age</button>
           <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
           <button onClick={toggleIsEmployedStatus}>toggle status</button>
        </div>
    )
}
export default MyComponent;