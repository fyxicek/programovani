import "./components/DecreaseBtn"
import DecreaseBtn from "./components/DecreaseBtn"

const App = () => {
const value = 0

  return(
    <>
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseBtn />
    </>
  )
}

export default App