import React, { useState, useRef } from "react";

import { Box, Stack } from "@mui/material";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [sideBarToggle, setSideBarToggle] = useState("-100%");

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: { xs: "flex", md: "none" },
          background: "#edf2f8",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          left: sideBarToggle,
          top: "0",
          transition: "left 0.3s ease-in-out",
          p: 2,
          zIndex: "1000",
        }}
      >
        <IoMdClose
          className="icon"
          style={{
            position: "absolute",
            right: "25px",
            top: "25px",
            fontSize: "36px",
          }}
          onClick={() => setSideBarToggle("-100%")}
        />
        <Stack direction="column" sx={{ mt: { xs: 5, sm: 8 } }}>
          {[
            "Home",
            "About",
            "Projects",
            "Skills",
            "Certificates",
            "Contact",
          ].map((nav, index) => (
            <span
              key={nav}
              className="nav-item"
              style={{
                margin: "0",
                marginBottom: "65px",
                fontSize: "28px",
              }}
            >
              <Link
                activeClass="active"
                to={`#${index}`}
                spy={true}
                smooth={true}
                offset={-160}
                duration={0}
                onClick={() => {
                  setSideBarToggle("-100%");
                }}
              >
                {nav}
              </Link>
            </span>
          ))}
        </Stack>
      </Box>
      <Stack
        direction="row"
        sx={{
          top: 0,
          py: { xs: 2, md: 3 },
          px: { xs: 2, md: 6, lg: 12 },
          alignItems: "center",
          zIndex: "100",
          justifyContent: "space-between",
          position: "sticky",
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          boxShadow: "0 0 14px rgba( 31, 38, 135, 0.18)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <h3 style={{ fontSize: "26px", color: "#030303" }}>Ibrahim.dev</h3>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {[
            "Home",
            "About",
            "Projects",
            "Skills",
            "Certificates",
            "Contact",
          ].map((nav, index) => (
            <span key={index} className="nav-item">
              <Link
                activeClass="active"
                to={`#${index}`}
                spy={true}
                smooth={true}
                offset={-160}
                duration={0}
              >
                {nav}
              </Link>
            </span>
          ))}
        </Box>
        <Box sx={{ display: { md: "none" } }}>
          <HiMenuAlt3 className="icon" onClick={() => setSideBarToggle("0")} />
        </Box>
      </Stack>
    </>
  );
};

export default NavBar;
