
import './App.css';
import Home from "./page/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Animals from "./page/Animals";
import Plants from "./page/Plants";
import IntoPlants from './page/IntoPlants';
import IntoAnimals from './page/IntoAnimals';
import UnderPlants from './page/UnderPlants';



function App() {

  return (
    <div >
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Animals' element={<Animals />} />
          <Route path='/Plants' element={<Plants />} />
          <Route path='/IntoPlants' element={<IntoPlants/>}/>
          <Route path='/IntoAnimals' element={<IntoAnimals/>}/>
          <Route path='/IntoPlants1' element={<UnderPlants/>}/>
        </Routes>
 
    </div>
  );
}

export default App;
