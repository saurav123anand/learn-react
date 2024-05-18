import { useState } from "react";
function ColorPicker(){
   const [color,setColor]=useState("#FFF");

   function handleColorChange(event){
       setColor(event.target.value);
   }

   return  (
       <div className="color-picker-container">
            <h1>color picker</h1>
            <div className="color-dosplay" style={{backgroundColor:color}}>
                <p style={{color:"white"}}>Selected color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color"  onChange={handleColorChange}/>
       </div>
   )
}
export default ColorPicker;