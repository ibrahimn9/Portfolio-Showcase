import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import images from "../constants/images";

import { MdOutlineOpenInNew } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const Project = ({ project }) => {
  return (
    <Box
      sx={{
        background: "white",
        p: 2,
        borderRadius: 2,
        boxShadow: "0 0 10px rgba( 31, 38, 135, 0.18)",
      }}
    >
      <a href={project.live} target="_blank">
        <img
          src={images[project.background]}
          style={{
            display: "inline-block",
            objectFit: "cover",
            width: "100%",
            height: "220px",
            display: "flex",
            justifyContent: "start",
            alignItems: "top",
            borderRadius: "8px",
            objectPosition: "left top",
          }}
          className="project-img"
        />
      </a>
      <Typography
        variant="h5"
        sx={{
          fontSize: "18px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "500",
          color: "#46364a",
          mt: 2,
          mb: 1,
        }}
      >
        {project.title}
      </Typography>
      <p className="des" style={{ fontSize: "14px" }}>
        {project.des}
      </p>
      <Box sx={{ mt: 1 }}>
        <a href={project.code} target="_blank">
          <BsGithub className="icon" style={{ fontSize: "24px" }} />
        </a>
        <a href={project.live} target="_blank">
          <MdOutlineOpenInNew
            className="icon ml"
            style={{ fontSize: "24px" }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default Project;
