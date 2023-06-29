import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Project } from "../components";

const Projects = () => {
  const projects = [
    {
      title: "SaitStream: Explore the Cinematic Universe",
      des: "SaintStream is a comprehensive website designed to showcase my skills in building robust RESTful APIs while providing users with a seamless platform to explore, rate, and discover an extensive collection of movies and TV shows.",
      background: "saintstream",
      live: "https://saintstream.netlify.app/",
      code: "https://github.com/ibrahimn9/SaintStream-Explore-Rate-and-Discover-Movies-TV-Shows",
    },
    {
      title: "Coinary: A Comprehensive Cryptocurrency Website",
      des: " Explore in-depth details, rankings, and real-time price changes of various cryptocurrencies.",
      background: "coinary",
      live: "https://coinary.netlify.app/",
      code: "https://github.com/ibrahimn9/Coinary-A-Comprehensive-Cryptocurrency-Website",
    },
    {
      title: "Dona: Smart Watch Website Template",
      des: "Website template for a smartwatch-related project. Incorporating features such as product listings, interactive demos, user testimonials, and more. ",
      background: "dona",
      live: "https://dona-smart-watch.netlify.app/",
      code: "https://github.com/ibrahimn9/Smart_Watch_Website_Template",
    },
  ];
  return (
    <Box sx={{ my: 8, px: { xs: 2, md: 6, lg: 12, xl: 20 } }} id="#2">
      <Typography
        variant="h3"
        sx={{
          fontSize: "18px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          mb: { xs: 1, lg: 2 },
          color: "#313bac",
          textTransform: "uppercase",
        }}
      >
        Projects Portfolio
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "26px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          mb: { xs: 2, lg: 4 },
          color: "#46364a",
        }}
      >
        My Creative <span style={{ color: "#313bac" }}>Portfolio</span> Section
      </Typography>
      <Box className="container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
