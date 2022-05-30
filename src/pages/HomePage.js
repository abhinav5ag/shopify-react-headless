import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import Hero from "../components/Hero";
import RichText from "../components/RichText";
import ImageWithText from "../components/ImageWithText";

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products) return <div>loading...</div>;

  return (
    <Box>
      {/* <Hero /> */}
      <RichText
        heading="The thrill you’ve been waiting for."
        text="Our bikes guarantee a fun, thrilling, and colorful ride."
      />
      <Grid templateColumns={["repeat(1fr)", "repeat(3, 1fr)"]}>
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src} />
              <Text fontWeight="bold" position="absolute" bottom="15%" w="100%">
                {product.title}
              </Text>
              <Text color="gray.500" position="absolute" bottom="5%" w="100%">
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText heading="Adventure is here!" />
      <ImageWithText
        button
        image="https://pictures.topspeed.com/IMG/crop/201807/2018-yamaha-yzf-r1-2_800x0w.jpg"
        heading="Yamaha YZF-R1"
        text="The Yamaha YZF-R1 is a 1,000 cc class sports motorcycle made by Yamaha. It was first released in 1998, undergoing significant updates in 2000, 2002, 2004, 2006, 2007, 2009 and 2015. "
      />
      <ImageWithText
        reverse
        button
        image="https://www.motorcycle.com/blog/wp-content/uploads/2018/06/062218-Lightweight-Sportbikes-Kawasaki-Ninja-400-01-633x388.jpg"
        heading="Kawasaki Ninja 400"
        text="The Kawasaki Ninja 400 is a 399 cc Ninja series sport bike introduced by Kawasaki as a successor to the Ninja 300. "
      />
    </Box>
  );
};

export default HomePage;
