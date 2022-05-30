import React, { useContext } from "react";
import './navbaar.css';
import { Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

import { Badge, Box, Icon, Image } from "@chakra-ui/react";
import { MdShoppingBasket, MdDehaze } from "react-icons/md";

const Navbar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Box
      className="navbar-color"
      borderBottom="0.25pt white solid"
      backgroundColor="#e82231"
      display="flex"
      flexDir="row"
      p="1rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Icon
        fill="white"
        cursor="pointer"
        onClick={() => openMenu()}
        as={MdDehaze}
        w={30}
        h={30}
      ></Icon>
      <Link to="/">
        <Image
          src="https://cdn.boongg.com/Images%20-%20CDN/Header/boongg-white-logo-full.png"
          w={150}
          h={10}
        />
      </Link>
      <Box>
        <Icon
          fill="white"
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
