import React from 'react';
import {useParams} from "react-router-dom";
import { useSelector} from "react-redux";
import { selectorAllPaintings } from "../../selectors";
import "./CurentPainting.scss"


const CurentPainting = () => {
    let {id} = useParams();
    const allPaintings = useSelector(selectorAllPaintings)
    const painting = allPaintings.filter((el)=> el.id == id)
    let url = painting[0].urls.regular

    return(
      <div className='curent-block'>
          <img className='curent-block__img' src={url} alt="photto"/> 
      </div>
    ) 
}

export default CurentPainting