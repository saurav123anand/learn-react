import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Item from "./Item";
import Cart from "./Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Item name="MacBook Pro" price={100000}/>
        <Item name="PenDrive" price={4000}/>
        <Item name="Mobile" price={35000}/>
        <Cart/>
      </div>
    </>
  );
}

export default App;
