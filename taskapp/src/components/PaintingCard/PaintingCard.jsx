
import { Link } from "react-router-dom";
import "./PaintingCard.scss"

const PaintingCard = ({el}) => {
    const {user, urls, alt_description, id} = el
    return(
        <Link to={`/${id}`}>
        <div className="painting">
            <div className="painting__block" >
            <img className="painting__block--img" src={urls.small} alt="photto"/> 
            </div>
          <div className="painting__text">
            <p>Author: {user.name}</p>
            <p className="painting__description">Description: {alt_description}</p>
          </div>
        </div>
        </Link>
    )
}

export default PaintingCard