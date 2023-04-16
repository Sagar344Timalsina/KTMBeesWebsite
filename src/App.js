import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import HomePage from './Pages/HomePage';
function App() {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    </Routes>
   </BrowserRouter>
  
  );
}

export default App;
