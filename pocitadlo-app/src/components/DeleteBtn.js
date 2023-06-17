import "./DeleteBtn.css"

const DeleteBtn = (props) => {
    return(
        <button onClick={props.deleteOne}>Původní hodnota</button>
    )
    
}

export default DeleteBtn