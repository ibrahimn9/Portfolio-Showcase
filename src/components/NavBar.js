import React, { useState } from "react";

import { Box, Stack } from "@mui/material";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { Link } from "react-scroll";

const NavBar = () => {
  const [sideBarToggle, setSideBarToggle] = useState("-100%");

  const navItems = [
    { label: "Accueil", id: "#0" },
    { label: "À Propos", id: "#1" },
    { label: "Compétences", id: "#2" },
    { label: "Projets", id: "#3" },
    { label: "Formation", id: "#4" },
    { label: "Langues", id: "#5" },
    { label: "Certificats", id: "#6" },
    { label: "Contact", id: "#7" },
  ];

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
          {navItems.map((nav) => (
            <span
              key={nav.id}
              className="nav-item"
              style={{
                margin: "0",
                marginBottom: "45px",
                fontSize: "24px",
              }}
            >
              <Link
                activeClass="active"
                to={nav.id}
                spy={true}
                smooth={true}
                offset={-160}
                duration={0}
                onClick={() => {
                  setSideBarToggle("-100%");
                }}
              >
                {nav.label}
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
          boxShadow: "0 0 14px rgba(26, 54, 93, 0.12)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <h3 style={{ fontSize: "22px", color: "#1a365d", fontWeight: "700" }}>
            Ibrahim Hamdani
          </h3>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {navItems.map((nav) => (
            <span key={nav.id} className="nav-item">
              <Link
                activeClass="active"
                to={nav.id}
                spy={true}
                smooth={true}
                offset={-160}
                duration={0}
              >
                {nav.label}
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
