import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount() {
    const { person, emailToRemove } = this.props;

    // Show alert only if this is the person being removed
    if (emailToRemove === person.email) {
      alert(`A person with email ${person.email} was removed from your network!`);
    }
  }

  render() {
    const { img, email,id } = this.props.person;
    return (
      <div className="person">
        <b onClick={()=>this.props.removePerson(id)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
