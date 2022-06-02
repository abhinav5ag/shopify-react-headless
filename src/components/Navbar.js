import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

import { Badge, Box, Icon, Image } from "@chakra-ui/react";
import { MdShoppingBasket, MdDehaze } from "react-icons/md";

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Box
      borderBottom="0.25pt white solid"
      backgroundColor="#e82231"
      display="flex"
      flexDir="row"
      p="1rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/">
        <Image
          src="https://raw.githubusercontent.com/abhinav5ag/shopify-react-headless/6d5ab9fa973c9f85d5c2584dff13e70d731cfffb/public/boongg-white-logo-full.png"
          w={150}
          h={50}
        />
      </Link>
      <Box>
        <Icon
          fill="black"
          cursor="pointer"
          onClick={() => openCart()}
          as={MdShoppingBasket}
          w={30}
          h={30}
        ></Icon>
        <Badge backgroundColor="white" borderRadius="50%">
          {checkout?.lineItems?.length}
        </Badge>
      </Box>
    </Box>
  );
};

export default Navbar;
