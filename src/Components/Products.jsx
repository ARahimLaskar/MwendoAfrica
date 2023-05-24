import React, { useEffect } from "react";
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
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import { getData } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const items = useSelector((store) => {
    return store.products;
  });
  const isLoading = useSelector((store) => {
    return store.isLoading;
  });

  useEffect(() => {
    let interval = setTimeout(() => {
      dispatch(getData());
    }, 1000);
    clearInterval = interval;
  }, []);

  return (
    <Box>
      <Grid h="100vh" templateColumns="15% 1fr">
        <GridItem bg="red">
          <Text>Filter</Text>
          <Button
            w="100%"
            m="2px"
            box-sizing="border-box"
            colorScheme="blue"
            size={{ base: "sm", md: "md" }}
          >
            Checkout our Cars
          </Button>
          <Button
            w="100%"
            m="2px"
            box-sizing="border-box"
            colorScheme="blue"
            size={{ base: "sm", md: "md" }}
          >
            Checkout our SUVs
          </Button>
          <Button
            w="100%"
            m="2px"
            box-sizing="border-box"
            colorScheme="blue"
            size={{ base: "sm", md: "md" }}
          >
            Checkout our Pick-up Trucks
          </Button>
          <Button
            w="100%"
            m="2px"
            box-sizing="border-box"
            colorScheme="blue"
            size={{ base: "sm", md: "md" }}
          >
            Checkout our Pick-up Buses
          </Button>
        </GridItem>
        <GridItem m="20px">
          <Grid
            templateColumns={{
              base: "1fr 1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{ base: "5px", md: "10px" }}
          >
            {isLoading ? (
              <>
                <GridItem>
                  <Card padding="6" boxShadow="lg" bg="white">
                    <Skeleton height="200px" fadeDuration={1} />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="2"
                      skeletonHeight="2"
                    />
                    <Skeleton height="40px" fadeDuration={1} />
                  </Card>
                </GridItem>
                <GridItem>
                  <Card padding="6" boxShadow="lg" bg="white">
                    <Skeleton height="200px" fadeDuration={1} />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="2"
                      skeletonHeight="2"
                    />
                    <Skeleton height="40px" fadeDuration={1} />
                  </Card>
                </GridItem>
                <GridItem>
                  <Card padding="6" boxShadow="lg" bg="white">
                    <Skeleton height="200px" fadeDuration={1} />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="2"
                      skeletonHeight="2"
                    />
                    <Skeleton height="40px" fadeDuration={1} />
                  </Card>
                </GridItem>
                <GridItem>
                  <Card padding="6" boxShadow="lg" bg="white">
                    <Skeleton height="200px" fadeDuration={1} />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="2"
                      skeletonHeight="2"
                    />
                    <Skeleton height="40px" fadeDuration={1} />
                  </Card>
                </GridItem>
                <GridItem>
                  <Card padding="6" boxShadow="lg" bg="white">
                    <Skeleton height="200px" fadeDuration={1} />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="2"
                      skeletonHeight="2"
                    />
                    <Skeleton height="40px" fadeDuration={1} />
                  </Card>
                </GridItem>
                <GridItem>
                  <Card padding="6" boxShadow="lg" bg="white">
                    <Skeleton height="200px" fadeDuration={1} />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="2"
                      skeletonHeight="2"
                    />
                    <Skeleton height="40px" fadeDuration={1} />
                  </Card>
                </GridItem>
                <GridItem>
                  <Card padding="6" boxShadow="lg" bg="white">
                    <Skeleton height="200px" fadeDuration={1} />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="2"
                      skeletonHeight="2"
                    />
                    <Skeleton height="40px" fadeDuration={1} />
                  </Card>
                </GridItem>
                <GridItem>
                  <Card padding="6" boxShadow="lg" bg="white">
                    <Skeleton height="200px" fadeDuration={1} />
                    <SkeletonText
                      mt="4"
                      noOfLines={4}
                      spacing="2"
                      skeletonHeight="2"
                    />
                    <Skeleton height="40px" fadeDuration={1} />
                  </Card>
                </GridItem>
              </>
            ) : (
              items.map((e) => {
                return (
                  <Card boxShadow="0 0 8px black">
                    <CardBody overflow="hidden">
                      <Card overflow="hidden" p="0 0 10px 0">
                        <Image
                          w="100%"
                          h="250px"
                          margin="-40px -10px"
                          src={e.image}
                        />

                        <Heading
                          fontSize={{ base: "16px", md: "18px", lg: "24px" }}
                        >
                          {e.name}
                        </Heading>
                      </Card>

                      <Stack spacing="2px" textAlign="left">
                        <Text
                          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                        >
                          Transmission: {e.Transmission}
                        </Text>
                        <HStack>
                          {e.rating === "4" ? (
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
                              <span>{e.rating}</span>
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
                              <span> {e.rating}</span>
                            </>
                          )}
                        </HStack>
                        <Text
                          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                        >
                          {e.price} Per day
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
                        <i
                          class="fa-regular fa-heart fa-2x"
                          style={{ color: "#4169e1" }}
                        ></i>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                );
              })
            )}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
