import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Flex,
  Stack,
  Heading,
  Image,
  Text,
  Container,
  GridItem,
  Grid,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Divider,
} from "@chakra-ui/react";

export default function Invoice() {
  const userData = useSelector((store) => {
    return store.userData;
  });

  const itemDetails = useSelector((store) => {
    return store.product;
  });

  console.log(itemDetails);
  const data = useSelector((store) => {
    return store;
  });
  console.log("entire data", data);

  const uniqueId = Date.now();

  let no_days = window.localStorage.getItem("No_days");
  let totalAmount = window.localStorage.getItem("totalCost");

  const docRef = useRef();
  const downloadPDF = useReactToPrint({
    content: () => docRef.current,
  });

  return (
    <form style={{ padding: "10px", margin: "20px auto" }}>
      <Container
        p="20px"
        maxW="4xl"
        boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px"
        ref={docRef}
      >
        <FormControl>
          <Grid templateColumns="1fr 1fr" gap="50px">
            <GridItem>
              <Flex gap="10px">
                <Image
                  w="50px"
                  h="50px"
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/99/62/cc/caption.jpg?w=1200&h=-1&s=1"
                />
                <Stack display="flex" alignItems="flex-start" lineHeight="14px">
                  <Heading>INVOICE</Heading>
                  <Text>5th Floor </Text>
                  <Text>SJR Primus, 20th Main Rd </Text>
                  <Text>Koramangala, Bengaluru </Text>
                  <Text>Karnataka, Bangalore, India </Text>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem>
              <TableContainer>
                <Table variant="striped" colorScheme="blue">
                  <Thead>
                    <Tr>
                      <Th>Invoice ID</Th>
                      <Th>Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{uniqueId}</Td>
                      <Td>{userData.currentDateTime}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </GridItem>
          </Grid>
          <Divider m="10px 0" />
          <Stack margin="40px 0" lineHeight="15px">
            <FormLabel>Bill No: {uniqueId}</FormLabel>
            <FormLabel>Name : {userData.name}</FormLabel>
            <FormLabel>address :{userData.address}</FormLabel>
            <FormLabel>
              {userData.city}, {userData.state}, {userData.zip}
            </FormLabel>
            <FormLabel>{userData.phone}</FormLabel>
            <FormLabel>{userData.email}</FormLabel>
          </Stack>
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <TableCaption>Payment Non Refundable</TableCaption>
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Price/day</Th>
                  <Th>Booked Days</Th>
                  <Th>Total Amount(including GST)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{itemDetails.name}</Td>
                  <Td>{itemDetails.price}</Td>
                  <Td>{no_days}</Td>
                  <Td>{totalAmount}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Text textAlign="center">For any query please contact to</Text>
          <Text textAlign="center">+91-9876543210, +91-1234567890</Text>
        </FormControl>
      </Container>

      <Button
        display="flex"
        alignItems="center"
        m="30px auto"
        justifyContent="center"
        colorScheme="blue"
        onClick={downloadPDF}
      >
        Print
      </Button>
    </form>
  );
}
