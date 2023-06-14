import "./AllTasks.css"
import data from "../data"


const AllTasks = () => {
    const tasksHandler = () => {
        console.log("klik")
    }

    return <div>
        {
            data.map( (oneTask) => {
                const {id, name} = oneTask

                return <div className="one-task" key={id}>
                    <h4>{name}</h4>
                    <button type="button" onClick={tasksHandler}>Vymazání </button>
                </div>        
            })
        }
    </div>
}


export default AllTasks