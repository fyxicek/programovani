import "./ReloadMovieBtn.css"


const ReloadMovieBtn = (props) => {
    return(
        <button className="reload-movie-btn" onClick={props.reloadAllMovies}>Reload</button>
    )
}
export default ReloadMovieBtn