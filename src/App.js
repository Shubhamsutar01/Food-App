import Register from "./Register";
import Menu,{Home,Rice,Paneer}from "./Menu";

import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/rice" element={<Rice/>}/>
        <Route path="/paneer" element={<Paneer/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

