import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (todo) => {
    console.log("handle add is called")
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }))
  };

  handleRemove = (todo) => {
    // complete the function to remove the Todo from the list
    const updated=this.state.todos.filter(t=>t!==todo);
    this.setState({
      todos:updated
    });
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd={this.handleAdd}/>
        <List todos={this.state.todos} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}
