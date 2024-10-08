import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  // Use the required lifecycle methods here

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(res=>res.json())
    .then(data=>this.setState({photos:data,loading:false}))
  }

  render() {
    // Display loading status here
    return(
    <>
    {/* Separate loading message */}
    {this.state.loading && <div>Loading...</div>}

    <div className="App">
      {/* Render photos only if not loading */}
      {!this.state.loading && this.state.photos.map((photo) => (
        <Image key={photo.id} photo={photo} />
      ))}
    </div>
  </>);

   
  }
}
