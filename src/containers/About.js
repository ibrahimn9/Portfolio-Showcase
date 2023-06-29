import React from "react";
import images from "../constants/images";
import { Box, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        background: "white",
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
        mt: 4,
        py: 4,
      }}
      id="#1"
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          px: { xs: 0, sm: 2, md: 6, lg: 8 },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            height: { md: "60vh", lg: "50vh" },
            width: { md: "50%", lg: "40%" },
          }}
          className="es"
        />
        <Box
          sx={{
            flexBasis: { xs: "80%", sm: "60%", md: "40%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: "700",
              mb: { xs: 2, lg: 1 },
              color: "#313bac",
              margin: "auto",
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "26px",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: "700",
              mb: { xs: 2, lg: 1 },
              color: "#46364a",
              my: 2,
            }}
          >
            A Passionate Junior Developer based in Tlemcen, Algeria 🌍
          </Typography>
          <p className="des">
            Hello! I'm from Algeria, currently pursuing my studies at the Higher
            School of Computer Science{" "}
            <a
              style={{
                color: "#313bac",
                cursor: "pointer",
                fontWeight: "500",
              }}
              href="https://www.esi-sba.dz/fr/"
              target="_blank"
            >
              ESI SBA
            </a>
            . I am a junior developer and freelancer with a passion for creating
            responsive websites that offer a smooth user experience. If you're
            looking for a dedicated developer to help bring your ideas to life,
            I would be thrilled to collaborate with you. Let's create something
            amazing together.
          </p>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
