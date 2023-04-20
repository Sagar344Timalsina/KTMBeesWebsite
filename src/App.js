import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/HomePage';
import { MantineProvider } from '@mantine/core';
import AdminSidebar from './component/Admin/AdminSidebar';
import AdminLandingPage from './component/Admin/AdminLandingPage';
import AdminOurProjects from './component/Admin/AdminOurProjects';
import AdminAbout from './component/Admin/About';
import Hero from './component/Admin/AdminHero';
import Login from './Pages/Login';
import Companies from './component/Admin/AdminCompanies';
import Startup from './component/Admin/AdminStartupPartner';

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

          <Route path='/admin' element={<AdminSidebar />} >
            <Route path='' element={<AdminLandingPage />} />
            <Route path='ourProjects' element={<AdminOurProjects />} />
            <Route path='/admin/about' element={<AdminAbout />} />
            <Route path='/admin/hero' element={<Hero/>} />
            <Route path='/admin/companies' element={<Companies/>} />
            <Route path='/admin/startup' element={<Startup/>} />

          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>

  );
}

export default App;
