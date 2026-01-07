import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { BsCalendar, BsGeoAlt, BsAward } from "react-icons/bs";

const Education = () => {
  const education = [
    {
      period: "Oct. 2025 - Présent",
      title: "Cycle Ingénieur en Informatique - 5ème Année",
      institution: "École Supérieure en Informatique (ESI)",
      location: "Sidi Bel Abbès, Algérie",
      description: "Spécialisation en Systèmes d'Information et Web",
      current: true,
    },
    {
      period: "Oct. 2024 - Juin 2025",
      title: "Cycle Ingénieur en Informatique - 4ème Année",
      institution: "ESI Sidi Bel Abbès",
      description:
        "Data Engineering & Architectures : Data Warehousing, ETL/OLAP, NoSQL, Microservices avec Spring Boot. DevOps : Docker, Kubernetes. Développement Web : Angular, React, Spring.",
    },
    {
      period: "Oct. 2023 - Juin 2024",
      title: "Cycle Ingénieur en Informatique - 3ème Année",
      institution: "ESI Sidi Bel Abbès",
      description:
        "Gestion de BDD relationnelles (SQL), Réseaux (Cisco), Gestion de Projets Agiles (Jira, Scrum).",
    },
    {
      period: "Sept. 2021 - Juin 2023",
      title: "Classes Préparatoires Intégrées",
      institution: "ESI Sidi Bel Abbès",
      description:
        "Programmation Orientée Objet (Java), Développement d'applications web, Algorithmique et Systèmes d'exploitation (Linux).",
    },
    {
      period: "2021",
      title: "Baccalauréat Mathématiques Techniques",
      institution: "Lycée Ahmed El-Bayrouni, Maghnia",
      description: "Mention Excellent",
      highlight: true,
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
        background: "white",
      }}
      id="#4"
    >
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
        Formation
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "24px", md: "28px" },
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          color: "#1a365d",
          mb: 5,
          textAlign: "center",
        }}
      >
        Parcours Académique
      </Typography>

      <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        {education.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              mb: 3,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                left: { xs: "8px", md: "140px" },
                top: "30px",
                bottom: index === education.length - 1 ? "auto" : "-20px",
                width: "2px",
                backgroundColor: "#e2e8f0",
                display: index === education.length - 1 ? "none" : "block",
              },
            }}
          >
            {/* Timeline dot */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: "0", md: "132px" },
                top: "8px",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: item.current ? "#2c5282" : item.highlight ? "#d69e2e" : "#e2e8f0",
                border: "3px solid white",
                boxShadow: "0 0 0 2px " + (item.current ? "#2c5282" : item.highlight ? "#d69e2e" : "#cbd5e0"),
                zIndex: 1,
              }}
            />

            {/* Period (desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: "120px",
                textAlign: "right",
                pr: 4,
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: item.current ? "#2c5282" : "#718096",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {item.period}
              </Typography>
            </Box>

            {/* Content */}
            <Box
              sx={{
                flex: 1,
                pl: { xs: 5, md: 4 },
                pb: 2,
              }}
            >
              {/* Period (mobile) */}
              <Typography
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontSize: "12px",
                  fontWeight: "600",
                  color: item.current ? "#2c5282" : "#718096",
                  mb: 0.5,
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <BsCalendar /> {item.period}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: "600",
                  color: "#1a365d",
                  fontFamily: '"Poppins", sans-serif',
                  mb: 0.5,
                }}
              >
                {item.title}
                {item.highlight && (
                  <BsAward style={{ marginLeft: "8px", color: "#d69e2e" }} />
                )}
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#2c5282",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                {item.institution}
                {item.location && (
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px", color: "#718096", ml: 1 }}
                  >
                    <BsGeoAlt style={{ marginRight: "2px" }} />
                    {item.location}
                  </Typography>
                )}
              </Typography>

              <Typography
                sx={{
                  fontSize: "13px",
                  color: "#4a5568",
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Education;
