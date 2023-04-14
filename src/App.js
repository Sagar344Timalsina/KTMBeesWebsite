import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Pages/Contacts';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
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
