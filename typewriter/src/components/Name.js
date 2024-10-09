import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
  };

  // Required lifecycle methods here
  componentDidUpdate(prevProps) {
    // Start typing effect when showName changes to true
    if (this.props.showName && !prevProps.showName) {
      this.interval = setInterval(this.typeWriterEffect, 500);
    }

    // Stop typing effect when showName changes to false
    if (!this.props.showName && prevProps.showName) {
      clearInterval(this.interval);
      this.setState({ curIndex: 0, currentName: "" }); // Reset for next time
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when unmounting
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
