import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Divider,
} from "@chakra-ui/react";

export default function MenuDrower({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              <Link to="/">Home</Link>
              <Divider />
              <Link to="">About</Link>
              <Divider />
              <Link to="/products">Products</Link>
              <Divider />
              <Link>Contact</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
