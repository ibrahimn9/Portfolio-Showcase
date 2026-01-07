import React, { useState } from "react";
import { Box, Typography, Chip, Stack, Modal, IconButton } from "@mui/material";
import { BsGithub, BsGlobe, BsKey, BsLinkedin, BsChevronLeft, BsChevronRight, BsX, BsImages } from "react-icons/bs";
import { FaGraduationCap, FaUsers } from "react-icons/fa";

import images from "../constants/images";

const Projects = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pfeImages = [
    { src: images.pfe2, label: "Architecture Microservices" },
    { src: images.pfe3, label: "Interface Principale" },
    { src: images.pfe4, label: "Gestion des Étudiants" },
    { src: images.pfe5, label: "Gestion des Enseignants" },
    { src: images.pfe6, label: "Thèmes de Projets" },
    { src: images.pfe7, label: "Planification Soutenances" },
    { src: images.pfe8, label: "Suivi de Progression" },
    { src: images.pfe9, label: "Tableau de Bord" },
    { src: images.pfe10, label: "Rapports et Analytics" },
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? pfeImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === pfeImages.length - 1 ? 0 : prev + 1));
  };

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

  // Academic Project
  const academicProject = {
    title: "Plateforme de Gestion des PFE",
    subtitle: "Projet Pluridisciplinaire - ESI Sidi Bel Abbès",
    description:
      "Plateforme complète de gestion des projets de fin d'études basée sur une architecture microservices. Ce projet académique pluridisciplinaire a été développé en équipe et permet la gestion des étudiants, enseignants, thèmes de projets, planification des soutenances et suivi de progression à distance.",
    features: [
      "Architecture à 9 microservices indépendants",
      "Gestion des étudiants et enseignants",
      "Planification des soutenances",
      "Suivi de progression à distance",
      "Tableau de bord et analytics",
    ],
    technologies: ["Spring Boot", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Microservices", "Docker"],
    teamProject: true,
    githubUrl: "https://github.com/kadri-ayoub-2022/projet-cs-2",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7343392674810351616/",
  };

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
              {project.credentials && (
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
                  {!Array.isArray(project.credentials) && (
                    <Typography sx={{ fontSize: "12px", color: "#4a5568", fontFamily: "monospace" }}>
                      <strong>Email:</strong> {project.credentials.email}
                      <br />
                      <strong>Mot de passe:</strong> {project.credentials.password}
                    </Typography>
                  )}
                  {Array.isArray(project.credentials) && (
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
              )}
            </Box>
          </Box>
        ))}
      </Stack>

      {/* Academic Project Section */}
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "24px", md: "28px" },
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          color: "#1a365d",
          mb: 5,
          mt: 10,
          textAlign: "center",
        }}
      >
        Projet Académique
      </Typography>

      <Box
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          background: "linear-gradient(135deg, #1a365d 0%, #2c5282 100%)",
          boxShadow: "0 8px 30px rgba(26, 54, 93, 0.2)",
          color: "white",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <FaGraduationCap size={24} />
              <Chip
                label="Projet Pluridisciplinaire"
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: "500",
                }}
              />
              <Chip
                icon={<FaUsers style={{ color: "white" }} />}
                label="Travail d'Équipe"
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: "500",
                  "& .MuiChip-icon": { color: "white" },
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "24px", md: "28px" },
                fontFamily: '"Poppins", sans-serif',
                fontWeight: "700",
                mb: 0.5,
              }}
            >
              {academicProject.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                opacity: 0.9,
                mb: 3,
              }}
            >
              {academicProject.subtitle}
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                opacity: 0.9,
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              {academicProject.description}
            </Typography>

            {/* Features */}
            <Box sx={{ mb: 3 }}>
              {academicProject.features.map((feature, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: "13px",
                    opacity: 0.9,
                    mb: 0.5,
                    "&::before": { content: '"✓ "', fontWeight: "bold" },
                  }}
                >
                  {feature}
                </Typography>
              ))}
            </Box>

            {/* Technologies */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 3 }}>
              {academicProject.technologies.map((tech, i) => (
                <Chip
                  key={i}
                  label={tech}
                  size="small"
                  sx={{
                    fontSize: "11px",
                    height: "26px",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "white",
                    fontWeight: "500",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </Box>

            {/* Links */}
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
              <a href={academicProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Chip
                  icon={<BsGithub />}
                  label="Code Source"
                  clickable
                  sx={{
                    backgroundColor: "white",
                    color: "#1a365d",
                    fontWeight: "600",
                    "& .MuiChip-icon": { color: "#1a365d" },
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                />
              </a>
              <a href={academicProject.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Chip
                  icon={<BsLinkedin />}
                  label="Voir sur LinkedIn"
                  clickable
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    fontWeight: "500",
                    border: "1px solid rgba(255,255,255,0.3)",
                    "& .MuiChip-icon": { color: "white" },
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                  }}
                />
              </a>
            </Stack>
          </Box>

          {/* Right - Screenshot Gallery Preview */}
          <Box
            sx={{
              flex: { md: "0 0 40%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Main Preview Image */}
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                "&:hover .overlay": { opacity: 1 },
              }}
              onClick={() => {
                setCurrentImageIndex(0);
                setGalleryOpen(true);
              }}
            >
              <img
                src={images.pfe3}
                alt="PFE Platform Preview"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.2s",
                }}
              >
                <BsImages size={32} />
                <Typography sx={{ ml: 1, fontWeight: "600" }}>Voir la Galerie</Typography>
              </Box>
            </Box>

            {/* Thumbnail Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 1,
              }}
            >
              {pfeImages.slice(0, 4).map((img, i) => (
                <Box
                  key={i}
                  sx={{
                    borderRadius: 1,
                    overflow: "hidden",
                    cursor: "pointer",
                    opacity: 0.8,
                    transition: "opacity 0.2s, transform 0.2s",
                    "&:hover": { opacity: 1, transform: "scale(1.05)" },
                  }}
                  onClick={() => {
                    setCurrentImageIndex(i);
                    setGalleryOpen(true);
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    style={{
                      width: "100%",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* View All Button */}
            <Chip
              icon={<BsImages />}
              label={`Voir les ${pfeImages.length} captures d'écran`}
              clickable
              onClick={() => {
                setCurrentImageIndex(0);
                setGalleryOpen(true);
              }}
              sx={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "white",
                fontWeight: "500",
                border: "1px solid rgba(255,255,255,0.3)",
                "& .MuiChip-icon": { color: "white" },
                "&:hover": { backgroundColor: "rgba(255,255,255,0.25)" },
                alignSelf: "flex-start",
              }}
            />
          </Box>
        </Stack>
      </Box>

      {/* Image Gallery Modal */}
      <Modal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "95vw", md: "85vw" },
            maxWidth: "1200px",
            maxHeight: "90vh",
            backgroundColor: "#1a1a1a",
            borderRadius: 3,
            overflow: "hidden",
            outline: "none",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={() => setGalleryOpen(false)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 10,
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <BsX size={24} />
          </IconButton>

          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 10,
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <BsChevronLeft size={24} />
          </IconButton>
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 10,
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <BsChevronRight size={24} />
          </IconButton>

          {/* Main Image */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: "60vh", md: "70vh" },
              p: 2,
            }}
          >
            <img
              src={pfeImages[currentImageIndex]?.src}
              alt={pfeImages[currentImageIndex]?.label}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Image Label */}
          <Box
            sx={{
              textAlign: "center",
              p: 2,
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <Typography sx={{ color: "white", fontWeight: "600", mb: 1 }}>
              {pfeImages[currentImageIndex]?.label}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
              {currentImageIndex + 1} / {pfeImages.length}
            </Typography>
          </Box>

          {/* Thumbnail Strip */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              p: 2,
              overflowX: "auto",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            {pfeImages.map((img, i) => (
              <Box
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                sx={{
                  flexShrink: 0,
                  width: "80px",
                  height: "50px",
                  borderRadius: 1,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: currentImageIndex === i ? "2px solid white" : "2px solid transparent",
                  opacity: currentImageIndex === i ? 1 : 0.6,
                  transition: "all 0.2s",
                  "&:hover": { opacity: 1 },
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Projects;
