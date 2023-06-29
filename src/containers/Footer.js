import React from "react";
import { Box, Stack } from "@mui/material";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6, lg: 12, xl: 20 },
        py: 6,
        background: "#6b7688",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box sx={{ mb: { xs: 4, md: 0 } }}>
          <p className="sub-title ">
            Copyright © 2023. All rights are reserved
          </p>
        </Box>
        <Box>
          <a
            href="https://www.linkedin.com/in/hamdani-ibrahim-427200281/"
            target="_blank"
          >
            <BsLinkedin className="icon mr" style={{ color: "white" }} />
          </a>
          <a href="https://github.com/ibrahimn9" target="_blank">
            <BsGithub className="icon" style={{ color: "white" }} />
          </a>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
