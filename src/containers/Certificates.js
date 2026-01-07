import React from "react";
import { Box, Typography } from "@mui/material";
import images from "../constants/images";

const Certificates = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6, lg: 12, xl: 20 }, py: 8, background: "white" }} id="#6">
      <Typography
        variant="h3"
        sx={{
          fontSize: "16px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "600",
          color: "#2c5282",
          textTransform: "uppercase",
          letterSpacing: "2px",
          mb: 1,
          textAlign: "center",
        }}
      >
        Certificats
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "24px", md: "28px" },
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          color: "#1a365d",
          mb: 2,
          textAlign: "center",
        }}
      >
        Certifications et Réalisations
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          color: "#4a5568",
          textAlign: "center",
          maxWidth: "700px",
          mx: "auto",
          mb: 4,
          lineHeight: 1.7,
        }}
      >
        Certifications obtenues via le programme{" "}
        <a
          style={{
            color: "#2c5282",
            cursor: "pointer",
            fontWeight: "600",
            textDecoration: "none",
          }}
          href="https://fullstackopen.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Stack Open
        </a>{" "}
        de l'Université d'Helsinki, couvrant le développement web moderne avec JavaScript, React, Node.js, et GraphQL.
      </Typography>
      <Box 
        className="container" 
        sx={{ 
          mt: 4,
          maxWidth: "900px",
          mx: "auto",
        }}
      >
        <Box 
          sx={{ 
            borderRadius: 2, 
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(26, 54, 93, 0.08)",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 30px rgba(26, 54, 93, 0.12)",
            },
          }} 
        >
          <a
            href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/cae3b87824dd5fb8cd482546c9b23c2b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={images.fs}
              alt="Full Stack Open Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "left top",
              }}
            />
          </a>
        </Box>
        <Box 
          sx={{ 
            borderRadius: 2, 
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(26, 54, 93, 0.08)",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 30px rgba(26, 54, 93, 0.12)",
            },
          }} 
        >
          <a
            href="https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/1bb9559b2cf7489a910a7bc223247e1d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={images.gql}
              alt="GraphQL Certificate"
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
