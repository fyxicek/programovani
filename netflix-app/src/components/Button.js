import "./Button.css"

const Button = (props) => {
    return(
        <button onClick={props.delete}>Vymazat vše</button>
    )
}

export default Button