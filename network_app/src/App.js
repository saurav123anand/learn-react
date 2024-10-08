import "./styles.css";
import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: [
        {
          id: 1,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071817/pexels-rodnae-productions-7348711_doe69b.jpg",
          email: "john@gmail.com",
          show: true
        },
        {
          id: 2,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071807/pexels-zaid-mohammed-15131063_bysy0s.jpg",
          email: "stephen@gmail.com",
          show: true
        },
        {
          id: 3,
          img:
            "https://res.cloudinary.com/dl26pbek4/image/upload/v1675071812/pexels-ali-kazal-14520051_qrdgym.jpg",
          email: "alex@gmail.com",
          show: true
        }
      ],
      emailToRemove: null
    };
  }

  // Create function to remove person from your network here
  removePerson = (id) => {
    const personToRemove = this.state.network.find(person => person.id === id);
    if (personToRemove) {
      this.setState({ emailToRemove: personToRemove.email }, () => {
        // Remove the person after setting the email to alert
        this.setState((prevState) => ({
          network: prevState.network.filter(person => person.id !== id)
        }));
      });
    }
  };
  

  render() {
    return (
      <div className="App">
        <h1>My Network</h1>
        <div className="list">
          {this.state.network.map((p, i) => (
            <>
            <Person key={p.id} person={p} index={i} removePerson={this.removePerson} emailToRemove={this.state.emailToRemove}/>
            {console.log(i)}
            </>
            
          ))}
        </div>
      </div>
    );
  }
}

export default App;
