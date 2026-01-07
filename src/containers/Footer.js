import React from "react";
import { Box, Typography } from "@mui/material";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
        background: "#1a365d",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          color: "white",
          fontFamily: '"Poppins", sans-serif',
          mb: 1,
        }}
      >
        Ibrahim Hamdani
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#a0aec0",
          mb: 2,
        }}
      >
        Développeur Full Stack & Ingénieur Logiciel
      </Typography>
      <Box sx={{ mb: 2 }}>
        <a
          href="https://www.linkedin.com/in/ibrahimn9/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "16px" }}
        >
          <BsLinkedin style={{ fontSize: "24px", color: "#a0aec0" }} />
        </a>
        <a
          href="https://github.com/ibrahimn9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub style={{ fontSize: "24px", color: "#a0aec0" }} />
        </a>
      </Box>
      <Typography
        sx={{
          fontSize: "12px",
          color: "#718096",
        }}
      >
        © 2025 Ibrahim Hamdani. Tous droits réservés.
      </Typography>
    </Box>
  );
};

export default Footer;
