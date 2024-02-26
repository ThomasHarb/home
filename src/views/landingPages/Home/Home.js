import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "../../../common/Container";
import {
  DemoPages,
  Features,
  Footer,
  Hero,
  Highlights,
  Seeprojects,
  Skills,
} from "./components";

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Skills />
      </Container>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container>
          <Highlights />
        </Container>
      </Box>
      <Container>
        <Seeprojects />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Features />
        </Container>
      </Box>
      <Container>
        <DemoPages />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
