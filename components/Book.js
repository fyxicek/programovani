import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
    
    return(
        <div className="one-book">
        <img src={props.myimage} className="img" />
        <h2 className="main-heading">{props.mytitle}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Repellendus odit cupiditate 
            autem ipsum magni at fuga, omnis 
            eum tempore facere quaerat 
            reprehenderit vero aliquam? Esse necessitatibus facilis 
            exercitationem nesciunt voluptate.</p>
        <OrderButton />
        </div>
       
    )
}

export default Book