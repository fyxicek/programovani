import "./Button.css"

const Button = (props) => {
    return(
        <button className="movie-delete-button" onClick={props.delete}>Vymazat</button>
    )
}

export default Button