import React from "react";
import { Box, Stack, Typography, Chip } from "@mui/material";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap size={24} />,
      title: "5ème Année",
      subtitle: "ESI Sidi Bel Abbès",
    },
    {
      icon: <FaCode size={24} />,
      title: "Full Stack",
      subtitle: "React, Spring Boot, Node.js",
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: "Microservices",
      subtitle: "Docker, Kubernetes, CI/CD",
    },
    {
      icon: <BsLightningCharge size={24} />,
      title: "Freelance",
      subtitle: "Projets SaaS",
    },
  ];

  return (
    <Box
      sx={{
        background: "white",
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
        mt: 4,
        py: 8,
      }}
      id="#1"
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "16px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "600",
          mb: 1,
          color: "#2c5282",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        À Propos
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "24px", md: "28px" },
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          mb: 4,
          color: "#1a365d",
          textAlign: "center",
        }}
      >
        Profil Personnel
      </Typography>

      {/* Highlights Grid */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          justifyContent: "center",
          mb: 5,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {highlights.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              px: 3,
              borderRadius: 2,
              backgroundColor: "#f7fafc",
              border: "1px solid #e2e8f0",
              minWidth: { xs: "100%", sm: "auto" },
              transition: "all 0.2s",
              "&:hover": {
                backgroundColor: "#ebf4ff",
                borderColor: "#2c5282",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Box sx={{ color: "#2c5282" }}>{item.icon}</Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#1a365d",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4a5568",
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      {/* Bio Text */}
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          Étudiant ingénieur en <strong style={{ color: "#1a365d" }}>5ème année en Systèmes d'Information et Web</strong> à 
          l'<a
            style={{
              color: "#2c5282",
              fontWeight: "600",
              textDecoration: "none",
            }}
            href="https://www.esi-sba.dz/fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            École Supérieure en Informatique (ESI)
          </a> de Sidi Bel Abbès, Algérie.
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          Passionné par la conception de solutions innovantes et robustes, 
          j'ai développé une expertise solide en <strong style={{ color: "#1a365d" }}>développement Full Stack</strong>, 
          avec une spécialisation en architectures <strong style={{ color: "#1a365d" }}>microservices</strong>, 
          <strong style={{ color: "#1a365d" }}> Spring Boot</strong>, et pratiques <strong style={{ color: "#1a365d" }}>DevOps</strong> (Docker, Kubernetes, CI/CD).
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#4a5568",
            lineHeight: 1.8,
          }}
        >
          Fort d'expériences en freelance sur des projets SaaS complexes, 
          je maîtrise l'ensemble du cycle de développement logiciel, 
          de la conception à la mise en production.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
