import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  GridItem,
  Box,
  Heading,
  Divider,
  Select,
  HStack,
  useBreakpointValue,
  useDisclosure,
  Flex,
  Text,
} from "@chakra-ui/react";
import {
  FcAlphabeticalSortingAz,
  FcFilledFilter,
  FcList,
} from "react-icons/fc";
import { getData } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function FilterDrower({ isOpen, onOpen, onClose }) {
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(filterValue, sortValue));
  }, [filterValue, sortValue]);

  const handleSort = (e) => {
    setSortValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <HStack>
              <FcAlphabeticalSortingAz size="10px" />
              <Heading fontSize="14px" p="0 0 10px 0">
                Sort by price
              </Heading>
            </HStack>

            <Select placeholder="Sort by Price" onChange={handleSort}>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
            <HStack marginTop="30px">
              <FcFilledFilter size="20px" />
              <Heading textAlign="left" fontSize="24px" p="10px 0">
                Filter
              </Heading>
            </HStack>
            <Button
              w="100%"
              m="2px"
              box-sizing="border-box"
              colorScheme="blue"
              size={{ base: "xs", md: "md" }}
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              onClick={() => {
                setFilterValue("car");
              }}
            >
              Checkout our Cars
            </Button>
            <Button
              w="100%"
              m="2px"
              box-sizing="border-box"
              colorScheme="blue"
              size={{ base: "xs", md: "md" }}
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              onClick={() => {
                setFilterValue("SUV");
              }}
            >
              Checkout our SUVs
            </Button>
            <Button
              w="100%"
              m="2px"
              box-sizing="border-box"
              colorScheme="blue"
              size={{ base: "xs", md: "md" }}
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              onClick={() => {
                setFilterValue("truck");
              }}
            >
              Checkout our Pick-up Trucks
            </Button>

            <Button
              w="100%"
              m="2px"
              box-sizing="border-box"
              colorScheme="blue"
              size={{ base: "xs", md: "sm", lg: "md" }}
              onClick={() => {
                setFilterValue("bus");
              }}
            >
              Checkout our Buses
            </Button>
            <Button
              w="100%"
              m="2px"
              box-sizing="border-box"
              colorScheme="blue"
              size={{ base: "xs", md: "sm", lg: "md" }}
              onClick={() => {
                setFilterValue("all");
              }}
            >
              Checkout all our Vehicles
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
