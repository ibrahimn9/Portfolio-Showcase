import React from "react";
import { Box, Typography } from "@mui/material";

import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <Box
      sx={{ px: { xs: 2, md: 6, lg: 12, xl: 20 }, py: 8 }}
      id="#7"
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
        }}
      >
        Contact
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "22px", md: "26px" },
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          color: "#1a365d",
          maxWidth: { xs: "100%", sm: "70%" },
          mb: 4,
          lineHeight: 1.3,
        }}
      >
        Ouvert aux collaborations : N'hésitez pas à me contacter pour concrétiser vos projets
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 3,
            borderRadius: 2,
            background: "white",
            boxShadow: "0 4px 20px rgba(26, 54, 93, 0.08)",
            border: "1px solid #e2e8f0",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "50px", md: "60px" },
              minWidth: "50px",
              height: { xs: "50px", md: "60px" },
              borderRadius: "50%",
              background: "#ebf4ff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 2,
            }}
          >
            <HiMail style={{ fontSize: "28px", color: "#2c5282" }} />
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ 
                fontSize: "16px", 
                fontWeight: "600",
                color: "#1a365d",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{ 
                fontSize: { xs: "14px", md: "15px" }, 
                color: "#4a5568",
                wordBreak: "break-all" 
              }}
            >
              hamdaniibrahim.contact@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 3,
            borderRadius: 2,
            background: "white",
            boxShadow: "0 4px 20px rgba(26, 54, 93, 0.08)",
            border: "1px solid #e2e8f0",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "50px", md: "60px" },
              minWidth: "50px",
              height: { xs: "50px", md: "60px" },
              borderRadius: "50%",
              background: "#ebf4ff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 2,
            }}
          >
            <BsFillTelephoneFill
              style={{ fontSize: "24px", color: "#2c5282" }}
            />
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ 
                fontSize: "16px", 
                fontWeight: "600",
                color: "#1a365d",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Téléphone
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "14px", md: "15px" }, color: "#4a5568" }}
            >
              +213 799 973 962
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
