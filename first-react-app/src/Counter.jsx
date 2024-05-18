// updater function : A function passed as an argument to setState() usually , ex: setYear(y=>y+1);
// allow for safe updates based on the previous state , used with multiple state updates and asynchronous functions 
// good practice to use updater functions 


import { useState } from "react";
function Counter() {
    // const [count, setCount] = useState(0);

    // // use state with object
    // const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });

    // // use state with Array
    // const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    // use state with Array of an objects
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState(" ");
    const [carModel, setCarModel] = useState(" ");


    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear())
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i)=> i != index));
    }
    function handleYrChange(event) {
        setCarYear(event.target.value)
    }
    function handleMkChange(event) {
        setCarMake(event.target.value)
    }
    function handleMlChange(event) {
        setCarModel(event.target.value)
    }


    // const increment = () => {
    //     //    setCount(count+1);

    //     // using updater
    //     setCount(c => c + 1);
    //     setCount(c => c + 1);
    //     setCount(c => c + 1);
    // }
    // const decrement = () => {
    //     // setCount(count-1);
    //     // using updater 
    //     setCount(c => c - 1);
    // }
    // const reset = () => {
    //     // setCount(0);

    //     // using updater 
    //     setCount(c => c = 0);
    // }

    // function handleYearChange(event) {
    //     setCar(c => ({ ...c, year: event.target.value }))
    // }
    // function handleMakeChange(event) {
    //     setCar(c => ({ ...c, make: event.target.value }))
    // }
    // function handleModelChange(event) {
    //     setCar(c => ({ ...c, model: event.target.value }))

    // }

    // function handleAddFood() {
    //     const newFood = document.getElementById("food-input").value;
    //     document.getElementById("food-input").value = "";
    //     setFoods(f => [...f, newFood])
    // }
    // function handleRemoveFood(index) {
    //     setFoods(foods.filter((_, i) => i != index))
    // }

    return (
        // <>
        //     <div className="counter-container">
        //         <p>{count}</p>
        //         <button onClick={increment}>increment</button>
        //         <button onClick={decrement}>decrement</button>
        //         <button onClick={reset}>reset</button>
        //     </div>
        //     <div>
        //         <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        //         <input type="number" value={car.year} onChange={handleYearChange} />
        //         <input type="text" value={car.make} onChange={handleMakeChange} />
        //         <input type="text" value={car.model} onChange={handleModelChange} />
        //     </div>
        //     <h2>List of Food</h2>
        //     <ul>
        //         {foods.map((food,index)=><li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
        //     </ul>
        //     <input type="text" id="food-input" placeholder="Enter food name "/>
        //     <button onClick={handleAddFood}>Add food</button>
        // </>


        <div>
            <h2>list of car objects</h2>
            {cars.length>0 ?
            <ul>
            {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul> : <p>No car to show</p>
            }
            <input type="number" value={carYear} placeholder="Enter the year" onChange={handleYrChange} />  <br />
            <input type="text" value={carMake} placeholder="Enter Car make" onChange={handleMkChange} /> <br />
            <input type="text" value={carModel} placeholder="Enter car model" onChange={handleMlChange} /> <br />
            <button onClick={handleAddCar}>Add car</button>
        </div>




    )
}
export default Counter;