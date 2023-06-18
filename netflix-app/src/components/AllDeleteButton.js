import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return <nav>
        <button className="main-delete-btn" onClick={props.deleteAllMovies}>Smazat vše</button>
        </nav>
}

export default AllDeleteButton