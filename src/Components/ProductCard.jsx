import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Box,
  Card,
  CardBody,
  Image,
  Text,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Container,
  HStack,
  background,
} from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";
import axios from "axios";

export default function ({ item, name, image, Transmission, rating, price }) {
  const [iconClick, setIconClick] = useState(false);

  const handleClick = () => {
    setIconClick(!iconClick);
    // if (iconClick) {
    axios
      .post(`https://vehiches-data.onrender.com/cart`, item)
      .then((res) => console.log("added"));
  };

  return (
    <Card boxShadow="0 0 8px black">
      <CardBody overflow="hidden">
        <Card overflow="hidden" p="0 0 10px 0">
          <Image w="100%" h="250px" margin="-40px -10px" src={image} />

          <Heading fontSize={{ base: "16px", md: "18px", lg: "24px" }}>
            {name}
          </Heading>
        </Card>

        <Stack spacing="2px" textAlign="left">
          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            Transmission: {Transmission}
          </Text>
          <HStack>
            {rating === "4" ? (
              <>
                <i class="fa-solid fa-star" style={{ color: "#4169e1" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#4169e1" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#4169e1" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#4169e1" }}></i>
                <span>{rating}</span>
              </>
            ) : (
              <>
                <i class="fa-solid fa-star" style={{ color: "#4169e1" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#4169e1" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#4169e1" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#4169e1" }}></i>
                <i
                  class="fa-solid fa-star-half"
                  style={{ color: "#4169e1" }}
                ></i>
                <span> {rating}</span>
              </>
            )}
          </HStack>
          <Text fontSize={{ base: "12px", md: "14px", lg: "16px" }}>
            ₹ {price} Per day
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup w="100%" alignItems="center">
          <Button
            w="100%"
            box-sizing="border-box"
            colorScheme="blue"
            size={{ base: "sm", md: "md" }}
          >
            Buy Now
          </Button>

          {iconClick ? (
            <FcLike
              size="50px"
              // onClick={() => {
              //   handleClick(id);
              // }}
              onClick={handleClick}
            />
          ) : (
            <i
              class="fa-regular fa-heart fa-2x"
              style={{ color: "#4169e1" }}
              // onClick={() => {
              //   handleClick(id);
              // }}
              onClick={handleClick}
            ></i>
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
