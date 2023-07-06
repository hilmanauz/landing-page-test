import { HStack, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/icon.png";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <nav>
      <HStack position={"sticky"} paddingX={5} paddingY={3} top={0}>
        <Image src={logo} />
        <Spacer />
        <HamburgerIcon fontSize={40} color={"black"} />
      </HStack>
    </nav>
  );
}

export default Navbar;
