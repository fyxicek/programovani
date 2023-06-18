import "./Increase.css"

const Increase = (props) => {
    return(
        <button className="btn" onClick={props.increase}>Zvýšit</button>
    )
}
export default Increase