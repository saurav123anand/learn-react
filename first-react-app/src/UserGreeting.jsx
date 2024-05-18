// conditional rendering 
import PropTypes from 'prop-types'
function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome: {props.username}</h2>
    // }
    // return <h2>Please log in to continue</h2>

    // another way (using ternary operator)
    return (
        props.isLoggedIn ? <h2>Welcome: {props.username}</h2> : <h2>Please log in to continue</h2>
    )
}
UserGreeting.propTypes={
    isLoggedIn: PropTypes.bool,
    username:PropTypes.string
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest"
}
export default UserGreeting;