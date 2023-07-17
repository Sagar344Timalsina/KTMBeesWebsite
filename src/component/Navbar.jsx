import React, { useLayoutEffect, useState } from "react";
import "../index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Text } from "@mantine/core";
import { ImLocation } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import topFrame from "../assets/images/topFrame.png";

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const ChangeNavColor = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 30) {
      setScrolled(true);
    } else if (window.scrollY < 30) {
      setScrolled(false);
    }
  };
  // console.log(scrolled);
  useLayoutEffect(() => {
    window.addEventListener("scroll", ChangeNavColor);
  }, []);

  const { image } = props;
  const [hamActive, setHamActive] = useState(false);
  const handleHam = async () => {
    setHamActive(true);
  };
  const closeHam = async () => {
    setHamActive(false);
  };
  // console.log(image);
  const contact = [
    { id: 1, logo: <ImLocation />, name: "Baneshwor, Kathmandu", link: "/" },
    { id: 2, logo: <FiPhoneCall />, name: "+977-9800022222", link: "/" },
    { id: 3, logo: <AiOutlineMail />, name: "info@ktmbees.com", link: "/" },
  ];
  const quickLinks = [
    { id: 1, logo: <AiFillHome />, name: "Home", link: "/" },
    { id: 2, logo: <BsFillPeopleFill />, name: "About", link: "/about" },
    { id: 3, logo: <AiFillSetting />, name: "Projects", link: "/" },
    { id: 4, logo: <FaFileCode />, name: "We offer", link: "/" },
    { id: 5, logo: <FaRegHandshake />, name: "Partners", link: "/" },
    {
      id: 6,
      logo: <TbDeviceMobileMessage />,
      name: "Get in touch",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav
        className={`h-9 flex justify-between items-center px-4 ${scrolled ? "bg-light_yellow_1" : ""
          } fixed w-full top-0 sm:h-14 z-40`}
      >
        <section className="logo">
          <Link to={"/"}>
            <img
              src="../assests/logo/bees.png"
              alt="Bees"
              className="w-36 sm:w-48 hover:scale-110 transition-all"
            />
          </Link>
        </section>
        <section className="hamburger__logo z-10 hover:scale-110 transition-all">
          <GiHamburgerMenu
            className="hamburger text-xl sm:text-3xl"
            onClick={(e) => handleHam()}
          />
        </section>
        <section
          className={`ml-3 h-screen flex flex-col fixed right-0 top-0 sm:w-80 w-full bg-black text-white z-50 ease-in-out duration-300 ${hamActive ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className=" flex justify-between my-2">
            <div></div>
            <IoMdClose
              className="text-5xl cursor-pointer"
              onClick={(e) => closeHam()}
            />
          </div>
          <div className="flex flex-col ml-5 text-xl">
            {quickLinks.map((data) => (
              <div key={data.id}>
                <Link className="flex items-center mb-5" to={data.link}>
                  <span className="mr-5">{data.logo}</span>
                  <h6>{data.name}</h6>
                </Link>
              </div>
            ))}
            <div className="flex-col mt-16">
              <section className="mb-5 ">Contact</section>
              {contact.map((data) => (
                <div key={data.id}>
                  <Link className="flex items-center mb-5" to={data.link}>
                    <span className="mr-5">{data.logo}</span>
                    <h6>{data.name}</h6>
                  </Link>
                </div>
              ))}
            </div>
            {/* <button>Send</button> */}
            {/* <div></div> */}
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
