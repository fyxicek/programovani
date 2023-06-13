import "./Example.css"
import{useState} from "react"

const Example = () => { 
    console.log(useState());
    const [title, setTitle] = useState("Můj první title")
    const [buttonText, setButtonText] = useState("Původní text")

    const buttonHandler = () => {
        setTitle("Nový text v titlu")
    }

    const buttonHandler2 = () => {
        setTitle("!!!!")
        
    }
    const deleteAll = () => {
        setTitle("")
        
    }
    const buttonChange = () => {
        setButtonText("Nový text tlacitka")
        
    }
    return(
        <div className="text-button-changer">
        <h1>{title}</h1>
        <button type="button" onClick={buttonHandler}>Změnit title</button> 
        <button type="button" onClick={buttonHandler2}>Opět změnit</button>
        <button type="button" onClick={deleteAll}>Vymazat vše</button>
        <button type="button" onClick={buttonChange}>{buttonText}</button>
        </div>
    )
}

export default Example