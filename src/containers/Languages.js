import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Languages = () => {
  const languages = [
    {
      name: "Français",
      level: "TCF B2",
      proficiency: 75,
      color: "#2c5282",
      flag: "🇫🇷",
    },
    {
      name: "Anglais",
      level: "Courant (Professionnel)",
      proficiency: 85,
      color: "#1a365d",
      flag: "🇬🇧",
    },
    {
      name: "Arabe",
      level: "Langue maternelle",
      proficiency: 100,
      color: "#553c9a",
      flag: "🇩🇿",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
      }}
      id="#5"
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
        Langues
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
        Compétences Linguistiques
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        sx={{ justifyContent: "center", maxWidth: "900px", mx: "auto" }}
      >
        {languages.map((lang, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              maxWidth: { sm: "280px" },
              p: 3,
              borderRadius: 3,
              background: "white",
              boxShadow: "0 4px 20px rgba(26, 54, 93, 0.08)",
              border: "1px solid #e2e8f0",
              textAlign: "center",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 30px rgba(26, 54, 93, 0.12)",
              },
            }}
          >
            <Typography sx={{ fontSize: "40px", mb: 1 }}>{lang.flag}</Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1a365d",
                fontFamily: '"Poppins", sans-serif',
                mb: 0.5,
              }}
            >
              {lang.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: lang.color,
                mb: 2,
              }}
            >
              {lang.level}
            </Typography>
            
            {/* Progress bar */}
            <Box
              sx={{
                width: "100%",
                height: "6px",
                backgroundColor: "#e2e8f0",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: `${lang.proficiency}%`,
                  height: "100%",
                  backgroundColor: lang.color,
                  borderRadius: "3px",
                  transition: "width 0.5s ease",
                }}
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Languages;
