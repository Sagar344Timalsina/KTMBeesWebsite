import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/HomePage";
import { MantineProvider } from "@mantine/core";
import AdminSidebar from "./component/Admin/AdminSidebar";
import AdminOurProjects from "./component/Admin/AdminOurProjects";
import AdminAbout from "./component/Admin/AdminAbout";
import Hero from "./component/Admin/AdminHero";
import Login from "./Pages/Login";
import AdminPartner from "./component/Admin/AdminPartner";
import Companies from "./component/Admin/AdminCompanies";
import Startup from "./component/Admin/AdminStartupPartner";
import AdminServices from "./component/Admin/AdminServices";
import ProtectedRoute from "./ProtectedRoute";
import AuthProvider from "./Auth";
import AdminTeam from "./component/Admin/AdminTeam";
import Career from "./component/Career";
import CareerList from "./component/CareerList";
import AdminCareer from "./component/Admin/AdminCareer";

function App() {
  return (
    <AuthProvider>
      <MantineProvider
        theme={{
          colors: {
            "ocean-blue": [
              "#7AD1DD",
              "#5FCCDB",
              "#44CADC",
              "#2AC9DE",
              "#1AC2D9",
              "#11B7CD",
              "#09ADC3",
              "#0E99AC",
              "#128797",
              "#147885",
            ],
            "bright-pink": [
              "#F0BBDD",
              "#ED9BCF",
              "#EC7CC3",
              "#ED5DB8",
              "#F13EAF",
              "#F71FA7",
              "#FF00A1",
              "#E00890",
              "#C50E82",
              "#AD1374",
            ],
            "light-gray": ["#cbd5e1"],
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminSidebar />}>
                <Route path="ourProjects" element={<AdminOurProjects />} />
                <Route path="partner" element={<AdminPartner />} />
                <Route path="about" element={<AdminAbout />} />
                <Route path="hero" element={<Hero />} />
                <Route path="companies" element={<Companies />} />
                <Route path="startup" element={<Startup />} />
                <Route path="services" element={<AdminServices />} />
                <Route path="teams" element={<AdminTeam />} />
                <Route path="career" element={<AdminCareer />} />
              </Route>
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/career/:id" element={<Career />} />
            <Route path="/careerList" element={<CareerList />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </AuthProvider>
  );
}

export default App;
