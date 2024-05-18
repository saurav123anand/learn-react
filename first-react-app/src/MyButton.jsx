function MyButton(){
//    const handleClick=()=>console.log("Button clicked")
//    const handleClick2=(name)=>console.log(`Hello ${name}`)
    //   let count=0;
    //   const handleClick=(name)=>{
    //       if(count<3){
    //           count++;
    //          console.log(`${name} you clicked me ${count} times`)
    //       }
    //       else{
    //         console.log(`${name} stop clicking me`)
    //       }
    //   }

    const handleClick=(e)=>e.target.textContent="text changed"
   return (
    //    <>
    //    <button onClick={handleClick}>click me</button>
    //    <button onClick={()=>handleClick2("saurav")}>click me2</button>
    //    </>

    //    <>
    //    <button onClick={()=>handleClick("anand")}>click me</button>
    //    </>
    <>
       <button onClick={(e)=>handleClick(e)}>click me</button>
       </>
       
   )
}
export default MyButton;