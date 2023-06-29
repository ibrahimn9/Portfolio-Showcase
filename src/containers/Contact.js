import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <Box
      sx={{ px: { xs: 2, md: 6, lg: 12, xl: 20 }, py: 6, background: "white" }}
      id="#5"
    >
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
        CONTACT
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "26px",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: "700",
          color: "#46364a",
          maxWidth: { xs: "90%", sm: "50%" },
          mb: 3,
        }}
      >
        Open for Collaboration: Feel Free to Contact Me and Let's Bring Your
        Vision to Reality
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: { md: 8 },
            mb: { xs: 4, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "50px", md: "60px" },
              minWidth: "50px",
              height: { xs: "50px", md: "60px" },
              borderRadius: "50%",
              background: "#edf2f8",
              boxShadow: "0 0 10px rgba( 31, 38, 135, 0.18)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 2,
            }}
          >
            <HiMail style={{ fontSize: "32px", color: "#313bac" }} />
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Mail
            </Typography>
            <Typography
              variant="p"
              className="des"
              sx={{ fontSize: { xs: "14px", md: "16px" }, wordBreak: "break-all" }}
            >
              hamdaniibrahim.contact@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "50px", md: "60px" },
              minWidth: "50px",
              height: { xs: "50px", md: "60px" },
              borderRadius: "50%",
              background: "#edf2f8",
              boxShadow: "0 0 10px rgba( 31, 38, 135, 0.18)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 2,
            }}
          >
            <BsFillTelephoneFill
              style={{ fontSize: "32px", color: "#313bac" }}
            />
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontSize: "18px", fontWeight: "700" }}
            >
              Phone Number
            </Typography>
            <Typography
              variant="p"
              className="des"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              +213799973962
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
