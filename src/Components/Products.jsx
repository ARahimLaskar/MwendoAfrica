import React, { useEffect, useState } from "react";

import {
  Grid,
  GridItem,
  Box,
  Button,
  Heading,
  Divider,
  Select,
  HStack,
} from "@chakra-ui/react";
import { FcAlphabeticalSortingAz, FcFilledFilter } from "react-icons/fc";

import { getData } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Navbar from "./Nav";
import Footer from "./Footer";

export default function Products() {
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [pageNo, setPageno] = useState(1);

  const dispatch = useDispatch();
  const items = useSelector((store) => {
    return store.products;
  });
  const isLoading = useSelector((store) => {
    return store.isLoading;
  });

  useEffect(() => {
    dispatch(getData(filterValue, sortValue, pageNo));
  }, [filterValue, sortValue, pageNo]);

  const handleSort = (e) => {
    setSortValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <Box p="0 50px" h="1300px">
        <Grid templateColumns={{ base: "1fr", md: "20% 80%" }}>
          <GridItem
            position={{ md: "fixed" }}
            p="20px"
            w={{ base: "100%", md: "20%" }}
          >
            <HStack>
              <FcAlphabeticalSortingAz size="20px" />
              <Heading fontSize="24px" p="0 0 10px 0">
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
          </GridItem>

          <GridItem
            w="70%"
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
                      id={e.id}
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
            <Pagination
              pageNo={pageNo}
              setPageno={setPageno}
              filterValue={filterValue}
              sortValue={sortValue}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
