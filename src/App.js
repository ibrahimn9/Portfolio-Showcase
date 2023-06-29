import React from "react";
import { Box, Stack } from "@mui/material";

import {
  Header,
  About,
  Projects,
  Skills,
  Certificates,
  Contact,
  Footer,
} from "./containers";
import { NavBar } from "./components";

const App = () => {
  return (
    <Box>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
