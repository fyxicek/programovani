import "./DecreaseBtn.css"

const DecreaseBtn = (props) => {
    return(
        <button className="btn" onClick={props.decrease}>Snížit</button>
    )
}

export default DecreaseBtn