import { useState } from "react";

function Todos(){
    const [tasks,setTasks]=useState([]);
    const [newtask,setNewTask]=useState("");

    function handleInputChange(event){
       setNewTask(event.target.value)
    }
    function addTask(){
      if(newtask.trim()!==""){
        setTasks(t=>[...t,newtask]);
        setNewTask("");

      }
        
    }
    function deleteTask(index){
       const updatedTask=tasks.filter((_,i)=>i!=index);
       setTasks(updatedTask);
    }
    function moveTaskUp(index){
        if(index>0){
          const updatedTask=[...tasks];
          [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
          setTasks(updatedTask);
        }
    }
    function moveTaskDown(index){
      if(index<tasks.length-1){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
        setTasks(updatedTask);
      }
    }
    return (
        <div className="to-do-list">
          <h2>To-Do-List</h2>
          <div>
              <input type="text" placeholder="Enter a task..." id="input-item" value={newtask} onChange={handleInputChange}/>
              <button className="add-btn" onClick={addTask}>Add</button>
          </div>
          <ol>
            {tasks.map((task,index)=>
               <li key={index}>
                 <span className="text">{task}</span>
                 <button className="delete-btn" onClick={()=>deleteTask(index)}>delete</button>
                 <button className="move-btn" onClick={()=>moveTaskUp(index)}>👆</button>
                 <button className="move-btn" onClick={()=>moveTaskDown(index)}>👇</button>

               </li>
              )}
          </ol>
        </div>
    )
}
export default Todos;