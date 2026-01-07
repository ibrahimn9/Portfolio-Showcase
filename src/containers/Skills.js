import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";

import { FaJava, FaDocker, FaGitAlt, FaReact, FaAngular, FaNodeJs, FaPython } from "react-icons/fa";
import { SiSpringboot, SiKubernetes, SiMongodb, SiMysql, SiPostgresql, SiRedux, SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiApachecassandra } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Data",
      color: "#1a365d",
      bgColor: "#e2e8f0",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Cassandra", icon: <SiApachecassandra /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
      ],
    },
    {
      title: "Frontend",
      color: "#2c5282",
      bgColor: "#ebf4ff",
      skills: [
        { name: "JavaScript", icon: null },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React JS", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "HTML5", icon: null },
        { name: "CSS3", icon: null },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Material UI", icon: null },
      ],
    },
    {
      title: "Outils & Concepts",
      color: "#553c9a",
      bgColor: "#f3e8ff",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "CI/CD", icon: <VscAzureDevops /> },
        { name: "GitHub Actions", icon: null },
        { name: "API REST", icon: null },
        { name: "Microservices", icon: null },
        { name: "Design Patterns", icon: null },
        { name: "Data Warehouse", icon: <DiDatabase /> },
        { name: "ETL/OLAP", icon: null },
        { name: "Power BI", icon: null },
        { name: "Jira", icon: null },
        { name: "Agile/Scrum", icon: null },
        { name: "Oracle DB", icon: null },
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: "white",
        py: 8,
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
      }}
      id="#2"
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
        Compétences
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
        Stack Technique
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ justifyContent: "center" }}
      >
        {skillCategories.map((category, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              maxWidth: { md: "350px" },
              p: 3,
              borderRadius: 3,
              background: category.bgColor,
              border: `2px solid ${category.color}20`,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "18px",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: "600",
                color: category.color,
                mb: 2,
                textAlign: "center",
                pb: 1,
                borderBottom: `2px solid ${category.color}30`,
              }}
            >
              {category.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
              }}
            >
              {category.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  label={skill.name}
                  icon={skill.icon}
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: "500",
                    fontSize: "13px",
                    backgroundColor: "white",
                    color: category.color,
                    border: `1px solid ${category.color}40`,
                    "& .MuiChip-icon": {
                      color: category.color,
                    },
                    "&:hover": {
                      backgroundColor: category.color,
                      color: "white",
                      "& .MuiChip-icon": {
                        color: "white",
                      },
                    },
                    transition: "all 0.2s ease",
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;
