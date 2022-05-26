import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="black">
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        color="white"
        fontWeight="bold"
      >
        <Image
          h="100%"
          w="100%"
          src="https://cdni.autocarindia.com/ExtraImages/20200717020802_Buying-a-used-superbike-8.jpg"
        />
        <VStack p="10rem">
          <Link to="/">Yamaha</Link>
          <Link to="/">Suzuki</Link>
          <Link to="/">Kawasaki</Link>
        </VStack>
        <VStack p="10rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Sustainability</Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="white"
          w="100%"
          borderTop="1px solid white"
          p="1rem"
        >
          © Copyright www.workingwithshopify.com
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
