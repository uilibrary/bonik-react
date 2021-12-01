import Box from "@component/Box";
import { Fragment } from "react";
import Navbar from "@component/navbar/Navbar";
import Section1 from "@component/home/Section1";
import Section2 from "@component/home/Section2";
import Section3 from "@component/home/Section3";
import Section4 from "@component/home/Section4";
import Section5 from "@component/home/Section5";
import Section6 from "@component/home/Section6";
import Section7 from "@component/home/Section7";
import Section8 from "@component/home/Section8";
import Section9 from "@component/home/Section9";
import Container from "../components/Container";
import AppLayout from "../components/layout/AppLayout";

const Home4 = () => {
  return (
    <Fragment>
      <Navbar />
      <Container my="2rem">
        <Section1 />
        <Box mb="3.75rem">
          <Section2 />
        </Box>
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </Container>
    </Fragment>
  );
};

Home4.layout = AppLayout;

export default Home4;
