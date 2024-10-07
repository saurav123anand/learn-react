import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const {todos,handleRemove}=this.props;
    return (
      <div className="list">
        {/* Render the todo here from the props*/}
        {todos.map(todo=>(
          <Todo todo={todo} handleRemove={handleRemove}/>
        ))}
      </div>
    );
  }
}
