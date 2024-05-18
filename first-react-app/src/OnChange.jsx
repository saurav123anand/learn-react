import { useState } from "react";
function OnChange(){
    
    const [name,setName]=useState("Guest");
    const [quantity,setQuantity]=useState(0);
    const [shipping,setShipping]=useState("Delivery");

    const handleNameChange=(event)=>{
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return (
        <div>
            <input type="text"  value={name} onChange={(event)=>handleNameChange(event)}/>
            <p>Name: {name}</p>

            <input type="number"  value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <label>
                <input type="radio" value="Pick up" checked={shipping==="Pick up"}  onChange={handleShippingChange}/>
                Pick up
            </label>
            <label>
            <input type="radio" value="Delivery" checked={shipping==="Delivery"}  onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}
export default OnChange;