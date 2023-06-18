import "./components/DecreaseBtn"
import DecreaseBtn from "./components/DecreaseBtn"
import { useState } from "react"
import Increase from "./components/Increase"
import DeleteBtn from "./components/DeleteBtn"


const App = () => {


const [value, setValue] = useState(0)

const decreaseOne = () => {
  const newValue = value - 1
    setValue (newValue)

}

const increaseOne = () => {
  const increaseValue = value + 1
  setValue(increaseValue)
}

const deleteOne = () => {
  const deleteValue = value - value
  setValue(deleteValue)
}

  return(
    <div className="counter">
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseBtn decrease={decreaseOne}/>
    <Increase increase={increaseOne}/>
    <DeleteBtn deleteOne={deleteOne}/>
    </div>
  )
}

export default App