import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionFetchAllPaintings } from '../../reducers';
import { selectorAllPaintings } from '../../selectors';


import PaintingCard from "../../components/PaintingCard";
import "./Main.scss"


const Main = () => {

    const allPaintings = useSelector(selectorAllPaintings);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actionFetchAllPaintings())
    },[])
    console.log(allPaintings)


    return(
        <main className='galery-container'>
        <div className='paintings_list'>
        {allPaintings?.map((el)=>(
            <PaintingCard el={el}/>  
            ))}
        </div>
       
      
        </main>
    
    )
}

export default Main