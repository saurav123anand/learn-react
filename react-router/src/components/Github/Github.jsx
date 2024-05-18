import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //   fetch("https://type.fit/api/quotes")
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data)
    //   })
    // },[])
    const data=useLoaderData();
    let random=Math.round(15*Math.random());
  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-3xl'>Author is  : {data[random].author}
    <p>quote is {data[random].text}</p>
    </div>
  )
}

export const quotesLoader=async()=>{
   const response=await fetch("https://type.fit/api/quotes");
   return response.json();
}