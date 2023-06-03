import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  GridItem,
  Input,
  Flex,
  Text,
  Button,
  Grid,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  HStack,
  VStack,
  Select,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FcCurrencyExchange, FcOvertime } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Navbar from "./Nav";

export default function ProductDetails() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(0);

  const navigate = useNavigate();

  const calculateDays = () => {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();

    if (startDateTime && endDateTime) {
      const millisecondsPerDay = 24 * 60 * 60 * 1000;
      const timeDifference = Math.abs(endDateTime - startDateTime);
      const numberOfDays = Math.round(timeDifference / millisecondsPerDay);

      setNumberOfDays(numberOfDays);
      window.localStorage.setItem("No_days", numberOfDays);
    }
  };
  useEffect(() => {
    calculateDays();
  }, [startDate, endDate]);

  const itemDetails = useSelector((store) => {
    return store.product;
  });

  let totalPrice = numberOfDays * itemDetails.price;
  window.localStorage.setItem("Price", totalPrice);

  return (
    <>
      <Box
        w="80%"
        m="10px auto"
        boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      >
        <Grid w="100%" templateColumns="25% 1fr" gap="5%" p="10px">
          <GridItem p="20px" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <FormControl isRequired>
              <Heading marginBottom="40px" size="30px">
                Select Date & Time
              </Heading>
              <FormLabel>Pick up Place</FormLabel>
              <Select placeholder="Select option">
                <option value="option1">Banglore</option>
                <option value="option2">Mumbai</option>
                <option value="option3">Delhi</option>
                <option value="option3">Chennai</option>
                <option value="option3">Kolkata</option>
              </Select>
              <FormLabel>Drope off Place</FormLabel>
              <Select placeholder="Select option">
                <option value="option1">Kolkata</option>
                <option value="option2">Chennai</option>
                <option value="option3">Delhi</option>
                <option value="option3">Mumbai</option>
                <option value="option3">Banglore</option>
              </Select>
              <FormLabel>Pick up Date & Time</FormLabel>
              <Input
                marginBottom="20px"
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />

              <FormLabel>Drop off Date & Time</FormLabel>
              <Input
                marginBottom="20px"
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <HStack marginBottom="10px">
                <FcOvertime size="30px" />
                <Text textAlign="left">Number of Days: {numberOfDays}</Text>
              </HStack>

              <HStack>
                <FcCurrencyExchange size="30px" />
                <HStack>
                  <Text>Total Price:</Text> <Heading>₹ {totalPrice}</Heading>
                </HStack>
              </HStack>
            </FormControl>
          </GridItem>
          <GridItem>
            <Card
              p="10px"
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                p="10px"
                boxShadow="rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
                objectFit="cover"
                // maxW={{ base: "100%", sm: "200px" }}
                // maxH={{ base: "100%", sm: "200px" }}
                src={itemDetails.image}
                alt={itemDetails.name}
              />
              <Stack m="20px">
                <Image
                  border="1px solid #9bedff"
                  w="100px"
                  h="100px"
                  src={itemDetails.img1}
                />
                <Image
                  border="1px solid #9bedff"
                  w="100px"
                  h="100px"
                  src={itemDetails.img2}
                />
                <Image
                  border="1px solid #9bedff"
                  w="100px"
                  h="100px"
                  src={itemDetails.img3}
                />
                <Image
                  border="1px solid #9bedff"
                  w="100px"
                  h="100px"
                  src={itemDetails.img4}
                />
              </Stack>

              <Stack>
                <CardBody textAlign="left" lineHeight="30px">
                  <Heading size="md">{itemDetails.name}</Heading>
                  <HStack>
                    {itemDetails.rating === "4" ? (
                      <>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <span>{itemDetails.rating}</span>
                      </>
                    ) : (
                      <>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <i
                          class="fa-solid fa-star-half"
                          style={{ color: "#4169e1" }}
                        ></i>
                        <span> {itemDetails.rating}</span>
                      </>
                    )}
                  </HStack>
                  <Text
                    marginBottom="10px"
                    fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                  >
                    ₹ {itemDetails.price} Per day
                  </Text>
                  <Text>Type: {itemDetails.type}</Text>
                  <Text>Transmission: {itemDetails.Transmission}</Text>
                  <Text>Engine Capacity: {itemDetails.engine_capacity}</Text>
                  <Text>Fuel : {itemDetails.fuel}</Text>
                  <Text>Seats : {itemDetails.seats}</Text>
                  <Text>Air Bags : {itemDetails.air_bags}</Text>
                </CardBody>

                <CardFooter>
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme="blue"
                    hover="blue"
                    onClick={() => {
                      navigate("/payment");
                    }}
                  >
                    Proceed for Payment
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
