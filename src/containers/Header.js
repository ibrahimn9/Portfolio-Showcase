import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import animationData from "../assests/react.json";
import Lottie from "lottie-react";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <Box
      sx={{
        mt: { xs: 5, md: 15 },
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
        minHeight: { lg: "75vh" },
        mb: { xs: 2, md: 0 },
        pb: { xs: 0, sm: 4, lg: 0 },
      }}
      id="#0"
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        sx={{
          justifyContent: "space-between",
          px: { xs: 0, sm: 5, lg: 10 },
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "80%", md: "40%", lg: "55%" },
            maxWidth: { xs: "80%", md: "40%", lg: "55%" },
            mt: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: { xs: "32px", sm: "38px", md: "42px", lg: "48px" },
              fontFamily: '"Poppins", sans-serif',
              fontWeight: "700",
              mb: { xs: 2, lg: 1 },
              color: "#1a365d",
              lineHeight: 1.2,
            }}
          >
            Développeur Full Stack & Ingénieur Logiciel{" "}
          
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              fontFamily: '"Poppins", sans-serif',
              fontWeight: "500",
              mb: 2,
              color: "#2c5282",
            }}
          >
            Étudiant Ingénieur 5ème Année | ESI Sidi Bel Abbès
          </Typography>
          <p className="des">
            Passionné par la conception de solutions innovantes et robustes. 
            Expert en développement Full Stack avec une spécialisation en architectures 
            microservices, Spring Boot, et DevOps. Je conçois des applications web scalables 
            et performantes, de la conception à la mise en production.
          </p>
          <Box sx={{ mt: 3 }}>
            <a
              href="https://www.linkedin.com/in/ibrahimn9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="icon mr" />
            </a>
            <a
              href="https://github.com/ibrahimn9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="icon" />
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            flexBasis: "35%",
            ml: { md: 8 },
            minHeight: { xs: "28vh", md: "43vh" },
            maxHeight: "45vh",
            minWidth: "280px",
            maxWidth: "350px",
            aspectRatio: "1/1",
          }}
          className="animated-image-container"
        />
      </Stack>
    </Box>
  );
};

export default Header;
