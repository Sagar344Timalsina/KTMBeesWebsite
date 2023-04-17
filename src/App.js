import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/HomePage';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/contact' element={<Contacts />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
