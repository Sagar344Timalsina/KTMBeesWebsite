import React, { useEffect, useState } from "react";
import PartnerUs from "../component/PartnerUs";
import Services from "../component/Services";
import Companies from "../component/Companies";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import OurProjects from "../component/OurProjects";
import ReadyCreate from "../component/ReadyCreate";
import Loading from "../component/loading/Loading";
import Testimonial from "../component/Testimonial";
import DisplayData from "../utils/DisplayData";

const HomePage = () => {
  const [display, setDisplay] = useState([]);
  const [partners, setPartners] = useState([]);
  const [startup, setStartup] = useState([]);
  const [company, setCompany] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const datas = await DisplayData("herosection");
    setDisplay(datas);
    const listCompanies = await DisplayData("companies");
    setCompany(listCompanies);
    const listStartup = await DisplayData("startup");
    setStartup(listStartup);
    const listProjects = await DisplayData("projects");
    setProjects(listProjects);
    const list = await DisplayData("partner");
    setPartners(list[0]);
    const listServices = await DisplayData("services");
    setServices(listServices);
    const listTestinomial = await DisplayData("testimonial");
    setTestimonial(listTestinomial);
    setLoading(false);
  };
  useEffect(() => {
    let unsubscribe;
    unsubscribe = fetchData().then((r) => r);
    return () => {
      unsubscribe = [];
    };
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <main>
          <div className="bg-light_yellow_1" id="home">
            <Navbar />
            <Header display={display} />
          </div>
          <OurProjects projects={projects} />
          <PartnerUs partners={partners} />
          <Services services={services} />
          <Testimonial testimonial={testimonial} />
          <Companies company={company} startup={startup} />
          <ReadyCreate />
          <Footer />
        </main>
      )}
    </>
  );
};

export default HomePage;
