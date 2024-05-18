import dog from './assets/dog.jpeg'
import PropTypes from 'prop-types'
function Card(props){
    return(
        <div className="card">
            <img src={dog} className="card-img" alt="image loading..." />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">Dogs are not our whole life, but they make our lives whole.
                 Love is a four-legged word. Anything is paws-ible with a dog by your side. Love is a wet nose and a wagging tail</p>
            <small>{props.date}</small>
            <small>isActive : {props.isActive ? "Yes" : "No"}</small>
        </div>
        
    )
}
// propTypes
// --> It's a mechanism that ensures that the passed value is of the correct datatype.
// isActive : PropTypes.Boolean
Card.propTypes={
    title:PropTypes.string,
    date:PropTypes.number,
    isActive:PropTypes.bool
}
Card.defaultProps={
    title:"Mojo",
    date:new Date().getFullYear(),
    isActive:false
}
export default Card;