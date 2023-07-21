import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const navBar = [
    { id: 1, to: "/admin/hero", text: "Landing Page" },
    { id: 2, to: "/admin/ourProjects", text: "Our Projects" },
    { id: 3, to: "/admin/partner", text: "Partner With Us" },
    { id: 4, to: "/admin/services", text: "Services" },
    { id: 5, to: "/admin/companies", text: "Companies That Trusted" },
    { id: 6, to: "/admin/startup", text: "Startup Partners" },
    { id: 7, to: "/admin/about", text: "About Page" },
    { id: 8, to: "/admin/teams", text: "Our Teams" },
    { id: 8, to: "/admin/career", text: "Career" },
    { id: 8, to: "/admin/testimonial", text: "Testimonial" },
  ];
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <Header height={{ base: 50, md: 70 }} p="md" className="bg-black m-0">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
            className="text-4xl"
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Link to={"/"}>
              <img src="../assests/logo/bees.png" alt="Bees" className="w-44" />
            </Link>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          className="bg-black text-white"
        >
          <Navbar.Section grow mt="sm" className="text-xl flex flex-col ">
            {navBar.map((nav) => (
              <Text
                key={nav.id}
                component={Link}
                variant="link"
                to={nav.to}
                className="navbar px-3 font-sans py-3 hover:bg-yellow focus:bg-yellow focus:rounded-lg transition-all hover:text-white hover:rounded-lg cursor-pointer "
              >
                {nav.text}
              </Text>
            ))}
          </Navbar.Section>
          <Navbar.Section>
            <Text
              className="text-xl font-sans flex items-center justify-center transition-all text-white  bg-yellow h-12 hover:bg-gray hover:cursor-pointer hover:scale-105 rounded-lg"
              onClick={logOut}
            >
              Logout
            </Text>
          </Navbar.Section>
        </Navbar>
      }
    >
      <Outlet />
    </AppShell>
  );
};

export default AdminSidebar;
