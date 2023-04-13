import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contacts from './Pages/Contacts';
import AboutUs from './Pages/AboutUs';
function App() {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/contact' element={<Contacts/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    </Routes>
   </BrowserRouter>
  
  );
}

export default App;
