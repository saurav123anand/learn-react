import React from 'react'
import {createContext,useState} from 'react';

export const CounterContext=createContext(null);

export const CounterProvider=(props)=>{
   const [count, setCount] = useState(0);
   return (
      <CounterContext.Provider value={{count,setCount,name:"saurav"}}>
        {props.children}
      </CounterContext.Provider>
   )
}   