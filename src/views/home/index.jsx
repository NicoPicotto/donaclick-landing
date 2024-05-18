import { Stack, Heading, Button, Text } from "@chakra-ui/react";
import Hero from "../../Components/Hero";
import About from "../../Components/About";
import Ongs from "../../Components/Ongs";

const index = () => {
  return (
    <>
      <Hero />
      <About />
      <Ongs />
    </>
  );
};

export default index;
