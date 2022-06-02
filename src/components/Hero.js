import React from "react";
import { Box, Button, Text, Image, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box backgroundColor="black" w="100%" position="relative" h="70vh">
      <Image
        className="fade-in"
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={["top", "center"]}
        src="https://wallpaperaccess.com/full/1610977.jpg"
      />
      <Text
        className="tracking-in-expand-fwd"
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
      >
        Introducing Boong
      </Text>
      <Center>
        <Button
          w="10rem"
          backgroundColor="black"
          color="white"
          _hover={{ opacity: "70%" }}
          position="absolute"
          bottom="10%"
        >
          Shop Now
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
