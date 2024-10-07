import { Component } from "react";

export class Todo extends Component {
  render() {
    const {handleRemove,todo}=this.props;
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={()=>handleRemove(todo)}>x</button>
      </div>
    );
  }
}
