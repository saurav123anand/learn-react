//import styles from './Button.module.css'
function Button(){
    // module css 
    // return (
    //     <button className={styles.button}>click me</button>
    // )

    // inline CSS
    const styles={
        display: "inline-block",
        padding: "12px 13px",
        backgroundColor: "red",
        borderRadius: "23px",
        outline: "none",
        fontFamily: "'Courier New', Courier, monospace"
    }
    return (
        <button style={styles}>click me</button>
    )
}
export default Button;