import React from "react";
import { HashLink } from "react-router-hash-link";
import { ImLocation } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  const quickLinks = [
    { id: 1, name: "Home", link: "/#home" },
    { id: 2, name: "Our Projects", link: "/#projects" },
    { id: 3, name: "Services", link: "/" },
    { id: 4, name: "What we offer", link: "/" },
    { id: 5, name: "Startup Partners", link: "/#startup" },
  ];
  const about = [
    { id: 1, name: "About us", link: "/about" },
    { id: 2, name: "Our team", link: "/" },
    { id: 3, name: "Policy", link: "/about" },
    { id: 4, name: "CSR", link: "/" },
  ];
  const contact = [
    { id: 1, logo: <ImLocation />, name: "Baneshwor, Kathmandu", link: "/" },
    { id: 2, logo: <FiPhoneCall />, name: "+977-9800022222", link: "/" },
    { id: 3, logo: <AiOutlineMail />, name: "info@ktmbees.com", link: "/" },
  ];
  return (
    <div className="footer flex bg-[#111111] flex-col">
      <section className="w-10/12 sm:mt-10 ml-10 mt-10 mb-2 text-white sm:w-3/4  sm:mb-4 sm:m-auto sm:flex justify-between">
        <article className="quick-link flex flex-col mb-6">
          <div className="text-sm sm:mb-4 mb-2 sm:text-2xl">Quick Links</div>
          {quickLinks.map((data) => (
            <HashLink
              to={data.link}
              className="text-xs links mb-2 sm:text-lg"
              key={data.id}
              smooth
            >
              {data.name}
            </HashLink>
          ))}
        </article>
        <article className="about flex flex-col mb-6">
          <div className="text-sm sm:mb-4 mb-2 sm:text-2xl">About us</div>
          {about.map((data) => (
            <HashLink
              to={data.link}
              className="text-xs links mb-1 sm:mb-2 sm:text-lg"
              key={data.id}
            >
              {data.name}
            </HashLink>
          ))}
        </article>
        <article className="contact flex flex-col mb-6">
          <div className="text-sm sm:mb-4 mb-2 sm:text-2xl">Contact</div>
          {contact.map((data) => (
            <div key={data.id}>
              <HashLink
                className="flex items-center text-xs links mb-1 sm:mb-2 sm:text-lg"
                to={data.link}
              >
                <span className="mr-4">{data.logo}</span>
                <h6>{data.name}</h6>
              </HashLink>
            </div>
          ))}
        </article>
      </section>
      <hr className="w-[80%] sm:w-[75%] m-auto mb-5 border-[1px] border-[gray]" />
      <section className="w-[80%] sm:w-[75%] m-auto mb-5 flex justify-between items-center overflow-hidden">
        <img
          src="../assests/logo/bees.png"
          alt="BeeLogo"
          className="w-24 sm:w-44"
        />
        <div className="footer-right flex items-center">
          <label className="text-[8px] sm:text-base mx-2 text-[gray]">
            Copyright © All Rights Reserved
          </label>
          <img
            src="../assests/logo/github.png"
            alt="github"
            className="w-6 mx-2 sm:w-14"
          />
          <img
            src="../assests/logo/linkedin.png"
            alt="github"
            className="w-6 mx-2 sm:w-14"
          />
        </div>
      </section>
    </div>
  );
};
