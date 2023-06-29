import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import images from "../constants/images";

const Certificates = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 12, xl: 20 }, my: 6 }} id="#4">
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
        CERTIFICATES
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "26px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          color: "#46364a",
          mb: 3,
        }}
      >
        Certifications and Achievements
      </Typography>
      <p className="des">
        Earned through diligent efforts, these certifications were achieved by
        successfully completing the{" "}
        <a
          style={{
            color: "#313bac",
            cursor: "pointer",
            fontWeight: "500",
          }}
          href="https://fullstackopen.com/en/"
          target="_blank"
        >
          Full Stack Open
        </a>{" "}
        program offered by the University of Helsinki. By undertaking numerous
        exercises, I have sharpened my skills and gained proficiency in
        full-stack web development.
      </p>
      <Box className="container" sx={{ mt: 4 }}>
        <Box sx={{ borderRadius: 2, overflow: "hidden" }} className="hover-img">
          <a
            href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/cae3b87824dd5fb8cd482546c9b23c2b"
            target="_blank"
          >
            <img
              src={images.fs}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "left top",
              }}
            />
          </a>
        </Box>
        <Box sx={{ borderRadius: 2, overflow: "hidden" }} className="hover-img">
          <a
            href="https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/1bb9559b2cf7489a910a7bc223247e1d"
            target="_blank"
          >
            <img
              src={images.gql}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "left top",
              }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Certificates;
