import "./DecreaseBtn.css"

const DecreaseBtn = (props) => {
    return(
        <button onClick={props.decrease}>Snížit</button>
    )
}

export default DecreaseBtn