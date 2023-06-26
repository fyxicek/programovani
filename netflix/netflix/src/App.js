import data from "./data"


const App = () => {
  return <div>
  {
    data.map((oneMovie) => {
    const {id, image, title, age, tags, description} = oneMovie

    return<div key={id}>
    <p>{title}</p>
    </div>
    
    })
  }
  </div>
 }

 export default App