import React from "react";
import PartnerUs from "../component/PartnerUs";
import OurProcess from "../component/OurProcess";
import Services from "../component/Services";
import Companies from "../component/Companies";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import OurProjects from "../component/OurProjects";
import ReadyCreate from "../component/ReadyCreate";
import topFrame from "../assets/images/topFrame.png";

const HomePage = () => {
  return (
    <main>
      <Navbar image={true} />
      <Header />
      <OurProjects />
      <PartnerUs />
      <Services />
      {/* <OurProcess /> */}
      <Companies />
      <ReadyCreate />
      <Footer />
    </main>
  );
};

export default HomePage;
