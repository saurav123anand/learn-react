import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Create Lifecycle method to prevent re render of the list if some spaces are present. 
  // Use the shouldComponentUpdate lifecycle method here
  shouldComponentUpdate(nextProps, nextState) {
    // Check if nextState is defined and if the new image URL contains spaces
    if (nextState && nextState.imageUrl && nextState.imageUrl.trim().includes(' ')) {
      return false; // Prevent re-render if there are spaces
    }
    return true; // Allow re-render otherwise
  }

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
