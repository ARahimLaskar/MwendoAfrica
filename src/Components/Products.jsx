import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Box,
  Button,
  Heading,
  Divider,
  Select,
} from "@chakra-ui/react";

import { getData } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";

export default function Products() {
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const dispatch = useDispatch();
  const items = useSelector((store) => {
    return store.products;
  });
  const isLoading = useSelector((store) => {
    return store.isLoading;
  });

  useEffect(() => {
    let interval = setTimeout(() => {
      dispatch(getData(filterValue, sortValue));
    }, 100);
    clearInterval = interval;
  }, [filterValue, sortValue]);

  const handleSort = (e) => {
    setSortValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Box>
      <Grid h="100vh" templateColumns={{ base: "1fr", md: "20% 80%" }}>
        <GridItem
          position={{ md: "fixed" }}
          p="20px"
          w={{ base: "100%", md: "20%" }}
        >
          <Heading fontSize="24px" p="0 0 10px 0">
            Sort by price
          </Heading>
          <Select placeholder="Sort by Price" onChange={handleSort}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>

          <Heading fontSize="24px" p="10px 0">
            Filter
          </Heading>
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
            size={{ base: "xs", md: "sm" }}
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
        </GridItem>

        <GridItem
          w="80%"
          p="20px"
          m={{ base: "130px 0 0 0", md: "0 0 0 20%" }}
          position="absolute"
        >
          <Grid
            templateColumns={{
              base: "1fr 1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{ base: "5px", md: "10px" }}
          >
            {isLoading ? (
              <ProductSkeleton />
            ) : (
              items?.map((e) => {
                return (
                  <ProductCard
                    item={e}
                    name={e.name}
                    image={e.image}
                    Transmission={e.Transmission}
                    rating={e.rating}
                    price={e.price}
                  />
                );
              })
            )}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
