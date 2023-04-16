import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Pages/Contacts';
import AboutUs from './Pages/AboutUs';
import OurProjects from './component/OurProjects';
import { MantineProvider } from '@mantine/core';
function App() {
  return (

    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
          'light-gray': ['#cbd5e1']
        },
      }}
      >
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<Contacts />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='' element={<OurProjects/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>

  );
}

export default App;
