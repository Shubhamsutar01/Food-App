import Register from "./Register";
import Menu,{Home,Rice,Paneer}from "./Menu";

import {Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [location]);
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

