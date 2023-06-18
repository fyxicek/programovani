import "./DeleteBtn.css"

const DeleteBtn = (props) => {
    return(
        <button className="btn" onClick={props.deleteOne}>Původní hodnota</button>
    )
    
}

export default DeleteBtn