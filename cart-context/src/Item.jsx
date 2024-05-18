import React from "react";
import { useCart } from "./context/Context";


const Item=(props)=>{
    const cart=useCart();
   return(
       <div className="item-card">
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        <button onClick={()=>cart.setItems([...cart.items,{name:props.name,price:props.price}])}>Add to cart</button>
       </div>

   )
}
export default Item;