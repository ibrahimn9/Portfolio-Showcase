import React from "react";
import { Box } from "@mui/material";

import {
  Header,
  About,
  Skills,
  Projects,
  Education,
  Languages,
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
      <Skills />
      <Projects />
      <Education />
      <Languages />
      <Certificates />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
