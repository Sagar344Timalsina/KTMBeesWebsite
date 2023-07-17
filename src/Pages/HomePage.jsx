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
import Feedback from "../component/Feedback";

const HomePage = () => {
  return (
    <main>
      <div className="bg-light_yellow_1">
        <Navbar />
        <Header />
      </div>
      <OurProjects />
      <PartnerUs />
      <Services />
      <Feedback />
      <Companies />
      <ReadyCreate />
      <Footer />
    </main>
  );
};

export default HomePage;
