import "./components/DecreaseBtn"
import DecreaseBtn from "./components/DecreaseBtn"
import { useState } from "react"
import Increase from "./components/Increase"

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

  return(
    <>
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseBtn decrease={decreaseOne}/>
    <Increase increase={increaseOne}/>
    </>
  )
}

export default App