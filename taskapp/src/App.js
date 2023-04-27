import { Routes, Route } from 'react-router-dom';
import Main from "./pages/Main/Main";
import CurentPainting from "./pages/CurentPainting/CurentPainting";


const App = () => { 
  return (
    <Routes>
       <Route path="/" element={ <Main/> }/>
       <Route path="/:id" element={ <CurentPainting/> }/>
    </Routes>

  );
}

export default App;
