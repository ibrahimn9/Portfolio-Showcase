import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import images from "../constants/images";

const Skills = () => {
  const skillsStack = [
    { name: "HTML", img: "html" },
    { name: "CSS", img: "css" },
    { name: "Javascript", img: "js" },
    { name: "React", img: "react" },
    { name: "Redux", img: "redux" },
    { name: "Git", img: "git" },
    { name: "Material ui", img: "mui" },
    { name: "MongoDB", img: "mongodb" },
  ];

  return (
    <Box
      sx={{
        background: "white",
        py: 12,
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
        textAlign: "center",
      }}
      id="#3"
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "18px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          color: "#313bac",
          margin: "auto",
          mb: 2,
        }}
      >
        SKILLS
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "26px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          mb: { xs: 2, lg: 1 },
          color: "#46364a",
          mb: 3,
        }}
      >
        Skills & Experience
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Box
          className="s-container"
          sx={{ textAlign: "center", flexBasis: "60%" }}
        >
          {skillsStack.map((skill, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "60px", md: "80px" },
                  height: { xs: "60px", md: "80px" },
                  borderRadius: "50%",
                  background: "#edf2f8",
                  boxShadow: "0 0 10px rgba( 31, 38, 135, 0.18)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
                key={index}
              >
                <img
                  src={images[skill.img]}
                  style={{ width: "75%", height: "75%", margin: "0" }}
                />
              </Box>
              <Typography
                variant="p"
                className="des"
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              >
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: { xs: 8, sm: 4, md: 0 }, textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: "500",
                color: "rgb( 31, 38, 135)",
                mr: 2,
                mt: "2px",
              }}
            >
              2022:
            </Typography>
            <Box sx={{ width: { xs: "70%", md: "40%" } }}>
              <p className="des" style={{ color: "#030303" }}>
                1st year preparatory class
              </p>
              <p className="des">ESI SBA</p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: "500",
                color: "rgb( 31, 38, 135)",
                mr: 2,
                mt: "2px",
              }}
            >
              2023:
            </Typography>
            <Box sx={{ width: { xs: "70%", md: "40%" } }}>
              <Box sx={{ mb: 1 }}>
                <p className="des" style={{ color: "#030303" }}>
                  2nd year preparatory class
                </p>
                <p className="des">ESI SBA</p>
              </Box>
              <Box>
                <p className="des" style={{ color: "#030303" }}>
                  Introduction to modern web application development with
                  JavaScript
                </p>
                <p className="des">Full Stack Open - UNIVERSITY OF HELSINKI</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
