import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import animationData from "../assests/react.json";
import Lottie from "lottie-react";

import images from "../constants/images";

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
              fontSize: { xs: "40px", sm: "46px", md: "48px", lg: "52px" },
              fontFamily: '"Poppins", sans-serif',
              fontWeight: "700",
              mb: { xs: 2, lg: 1 },
              color: "#030303",
            }}
          >
            Front-End React Developer{" "}
            <Box
              className="ml"
              sx={{
                minHeight: "60px",
                minWidth: "60px",
                maxHeight: "180px",
                maxWidth: "180px",
                display: { xs: "none", sm: "block" },
              }}
            >
              {" "}
              <Lottie
                animationData={animationData}
                loop={true}
                sytle={{ height: "10px", width: "10px" }}
              />
            </Box>
          </Typography>
          <p className="des">
            Hi, I'm a Front-End React Developer proficient in creating engaging
            and responsive web applications using React.
          </p>
          <Box sx={{ mt: 3 }}>
            <a
              href="https://www.linkedin.com/in/hamdani-ibrahim-427200281/"
              target="_blank"
            >
              <BsLinkedin className="icon mr" />
            </a>
            <a
              href="https://github.com/ibrahimn9"
              target="_blank"
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
