import React from "react";
import { HashLink } from "react-router-hash-link";
import { ImLocation } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import np from "../assets/images/np.png";
import us from "../assets/images/us.png";
import phone from "../assets/images/phone.png";

export const Footer = () => {
  const quickLinks = [
    { id: 1, name: "Home", link: "/#home" },
    { id: 2, name: "Our Projects", link: "/#projects" },
    { id: 3, name: "Services", link: "/#services" },
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
    {
      id: 1,
      logo: us,
      name: "3349 Haverford Dr Canton MI 48188 Michigan, United States",
      link: "/",
      icon: <FiPhoneCall />,
      phone: "+1 (910) 978-7328",
    },
    {
      id: 3,
      logo: np,
      name: "Baneshwor, Kathmandu, Nepal",
      link: "/",
      icon: <FiPhoneCall />,
      phone: "+977-9800022222",
    },
  ];
  return (
    <div className="footer flex bg-[#111111] flex-col">
      <section className="w-[80%] sm:w-[75%] m-auto pt-14 flex justify-between items-center overflow-hiddenv ">
        <section className="text-white grid grid-cols-1 lg:grid-cols-4   justify-center items-center">
          <article className="quick-link flex flex-col mb-6 col-span-1">
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
          <article className="about flex flex-col mb-6 col-span-1">
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
          <article className="contact flex flex-col mb-6 col-span-1 md:col-span-2">
            <div className="text-sm sm:mb-4 mb-2 sm:text-2xl">Address</div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {contact?.map((data) => (
                <div key={data.id} className="px-3 py-2 md:py-0">
                  <HashLink
                    className="flex items-start justify-start text-xs links flex-col mb-1 sm:mb-2 sm:text-lg"
                    to={data?.link}
                  >
                    <div className="flex py-2 justify-start">
                      <span className="mr-4 flex items-center justify-center">
                        <img
                          src={data.logo}
                          height={30}
                          width={30}
                          alt="logo"
                        />
                      </span>
                      <h6 className="w-[80%]">{data?.name}</h6>
                    </div>
                    <div className="flex py-2 justify-start">
                      <span className="mr-4 flex items-center justify-center">{data?.icon}</span>
                      <h6>{data?.phone}</h6>
                    </div>
                  </HashLink>
                </div>
              ))}
            </div>
          </article>
        </section>
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
