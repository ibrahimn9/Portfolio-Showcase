import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import { BsGithub, BsGlobe, BsKey } from "react-icons/bs";

import images from "../constants/images";

const Projects = () => {
  const projects = [
    {
      title: "Ordertech",
      subtitle: "Système IA de Prise de Commandes pour Restaurants",
      description:
        "Plateforme SaaS alimentée par l'IA qui transforme les opérations de commande des restaurants. Réduit les coûts de main-d'œuvre de 70% et augmente les revenus de 15% grâce à l'upselling intelligent et au service 24/7.",
      features: [
        "Précision de 99.2% sur les commandes",
        "Intégration IA pour appels vocaux",
        "Dashboard en temps réel",
        "Intégration POS (Foodics, Odoo)",
      ],
      technologies: ["NestJS", "PostgreSQL", "Prisma", "React", "TypeScript"],
      image: "ordertech",
      liveUrl: "https://ordertech.ai",
      credentials: {
        label: "Accès Demo",
        email: "owner@test.com",
        password: "Owner123!",
      },
    },
    {
      title: "Hawiacom",
      subtitle: "SaaS pour Entreprises de Location de Conteneurs",
      description:
        "Plateforme complète de gestion pour entreprises de location de conteneurs. Comprend un dashboard admin, un système ERP comptable, et une application chauffeur pour la gestion des livraisons en temps réel.",
      features: [
        "Dashboard Admin complet",
        "Système ERP comptable intégré",
        "Application Chauffeur mobile",
        "Gestion des commandes en temps réel",
      ],
      technologies: ["Node.js", "MySQL", "Sequelize", "React", "JavaScript", "HTML/CSS", "Flutter"],
      image: "hawia",
      urls: [
        { label: "Client", url: "https://hawiacom.com" },
        { label: "Admin", url: "https://admin.hawiacom.com" },
        { label: "ERP", url: "https://erp.hawiacom.com" },
      ],
      credentials: [
        {
          label: "Client & ERP",
          companyId: "7266400434",
          email: "hamdani20.ibrahim03@gmail.com",
          password: "ibrahim2004",
        },
        {
          label: "Admin",
          email: "ibrahim@hawia.com",
          password: "ibrahim2003",
        },
      ],
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6, lg: 12, xl: 20 } }} id="#3">
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
        Projets
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
        Réalisations Professionnelles
      </Typography>

      <Stack spacing={6}>
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
              gap: 4,
              p: { xs: 2, md: 4 },
              borderRadius: 3,
              background: "white",
              boxShadow: "0 4px 20px rgba(26, 54, 93, 0.08)",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Project Image */}
            <Box
              sx={{
                flex: { md: "0 0 45%" },
                minHeight: { xs: "200px", md: "300px" },
                borderRadius: 2,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={images[project.image]}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top left",
                }}
              />
            </Box>

            {/* Project Content */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "22px", md: "26px" },
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: "700",
                  color: "#1a365d",
                  mb: 0.5,
                }}
              >
                {project.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: "500",
                  color: "#2c5282",
                  mb: 2,
                }}
              >
                {project.subtitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#4a5568",
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                {project.description}
              </Typography>

              {/* Features */}
              <Box sx={{ mb: 2 }}>
                {project.features.map((feature, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: "13px",
                      color: "#2d3748",
                      mb: 0.5,
                      "&::before": { content: '"✓ "', color: "#2c5282", fontWeight: "bold" },
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>

              {/* Technologies */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                {project.technologies.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    sx={{
                      fontSize: "11px",
                      height: "24px",
                      backgroundColor: "#e2e8f0",
                      color: "#1a365d",
                      fontWeight: "500",
                    }}
                  />
                ))}
              </Box>

              {/* Links */}
              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Chip
                      icon={<BsGlobe />}
                      label="Site Web"
                      clickable
                      sx={{
                        backgroundColor: "#1a365d",
                        color: "white",
                        fontWeight: "500",
                        "& .MuiChip-icon": { color: "white" },
                      }}
                    />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Chip
                      icon={<BsGithub />}
                      label="GitHub"
                      clickable
                      sx={{
                        backgroundColor: "#2d3748",
                        color: "white",
                        fontWeight: "500",
                        "& .MuiChip-icon": { color: "white" },
                      }}
                    />
                  </a>
                )}
                {project.urls &&
                  project.urls.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Chip
                        icon={<BsGlobe />}
                        label={link.label}
                        clickable
                        sx={{
                          backgroundColor: "#2c5282",
                          color: "white",
                          fontWeight: "500",
                          "& .MuiChip-icon": { color: "white" },
                        }}
                      />
                    </a>
                  ))}
              </Stack>

              {/* Credentials */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "#f7fafc",
                  border: "1px dashed #cbd5e0",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#2c5282",
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <BsKey /> Identifiants de Démonstration
                </Typography>
                {project.credentials && !Array.isArray(project.credentials) && (
                  <Typography sx={{ fontSize: "12px", color: "#4a5568", fontFamily: "monospace" }}>
                    <strong>Email:</strong> {project.credentials.email}
                    <br />
                    <strong>Mot de passe:</strong> {project.credentials.password}
                  </Typography>
                )}
                {project.credentials && Array.isArray(project.credentials) && (
                  <Stack spacing={1}>
                    {project.credentials.map((cred, i) => (
                      <Box key={i}>
                        <Typography sx={{ fontSize: "11px", fontWeight: "600", color: "#2c5282" }}>
                          {cred.label}:
                        </Typography>
                        <Typography sx={{ fontSize: "11px", color: "#4a5568", fontFamily: "monospace" }}>
                          {cred.companyId && (
                            <>
                              <strong>ID Entreprise:</strong> {cred.companyId}
                              <br />
                            </>
                          )}
                          <strong>Email:</strong> {cred.email}
                          <br />
                          <strong>Mot de passe:</strong> {cred.password}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
