import "./Movie.css"
import data from "../data"
import Button from "./Button"
import {useState} from "react"

const Movie = () => {
    const [movieList, setMovieList] = useState(data)

    const deleteOne = (idecko) => {
        const filteredMovies = movieList.filter((oneMovie)=>{
            return oneMovie.id !== idecko
        }) 
        setMovieList(filteredMovies)
    }

    return(
        <div className="all-movies">
            {
               movieList.map((oneMovie) => {
                    const {id, image, title, age, tags, description} = oneMovie

                    return (
                        <div className="one-movie" key={id}>
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                            <Button delete={() => deleteOne(id)}/>
                        </div>
                    )
                    
                })
                
            }
        </div>
    )
    
}

export default Movie