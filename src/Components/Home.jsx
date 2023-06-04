import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Center,
  Grid,
  GridItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import Navbar from "./Nav";
import MyCarousel from "./MyCarousel";
import { useDispatch, useSelector } from "react-redux";
import ProductSkeleton from "./ProductSkeleton";
import { getCarData } from "../Redux/action";

export default function Home() {
  const links = {
    quickLinks: [
      { text: "Features", href: "#" },
      {
        text: "Pricing",
        href: "#",
      },
      { text: "Case Studies", href: "#" },
      {
        text: "Reviews",
        href: "#",
      },
      { text: "Updates", href: "#" },
    ],
    supportLinks: [
      { text: "Getting Started", href: "#" },
      {
        text: "Help Center",
        href: "#",
      },
      {
        text: "Server status",
        href: "#",
      },
      {
        text: "Report a bug",
        href: "#",
      },
      {
        text: "Chat Support",
        href: "#",
      },
    ],
    companyLinks: [
      { text: "About", href: "#" },
      {
        text: "Contact Us",
        href: "#",
      },
      { text: "Careers", href: "#" },
      {
        text: "Culture",
        href: "#",
      },
      { text: "Blog", href: "#" },
    ],
    socialLinks: [
      { text: "Facebook", href: "#" },
      {
        text: "Twitter",
        href: "#",
      },
      { text: "Instagram", href: "#" },
      {
        text: "Linkedin",
        href: "#",
      },
      { text: "Youtube", href: "#" },
    ],
  };
  const [carState, setCarState] = useState([]);
  const [busState, setBusState] = useState([]);
  const [truckState, setTruckState] = useState([]);
  const [suvState, setSuvState] = useState([]);
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => {
    return store.isLoading;
  });
  const items = useSelector((store) => {
    return store.products;
  });

  useEffect(() => {
    dispatch(getCarData());
  }, []);
  useEffect(() => {
    axios
      .get(`https://vehiches-data.onrender.com/vehicles?_limit=3&type=bus`)
      .then((res) => {
        setBusState(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://vehiches-data.onrender.com/vehicles?_limit=3&type=pick_up`)
      .then((res) => {
        setTruckState(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://vehiches-data.onrender.com/vehicles?_limit=3&type=SUVs`)
      .then((res) => {
        setSuvState(res.data);
      });
  }, []);

  return (
    <>
      <Box w="80%" textAlign="center" m="30px auto">
        <MyCarousel />
        <Grid gap="10px" m="40px 0" templateColumns="2fr 1fr" h="400px">
          <GridItem>
            <Image
              borderRadius="10px"
              w="100%"
              h="405px"
              m="5px 0"
              objectFit="cover"
              src="https://cdn.wallpapersafari.com/14/21/CAlr7m.jpg"
            />
          </GridItem>
          <GridItem>
            <Image
              borderRadius="10px"
              w="100%"
              h="200px"
              m="5px 0"
              src="https://c4.wallpaperflare.com/wallpaper/906/926/543/bugatti-chiron-sport-bugatti-supercars-car-wallpaper-preview.jpg"
            />
            <Image
              borderRadius="10px"
              w="100%"
              h="200px"
              src="https://cdn.wallpapersafari.com/7/7/YCsHBq.jpg"
            />
          </GridItem>
        </Grid>
        <br />

        <br />
        <Heading m="50px" color={"blue"}>
          Browse out Top Sedans for Rent
        </Heading>
        {isLoading ? (
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="40px"
          >
            <ProductSkeleton />
          </Grid>
        ) : (
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="40px"
          >
            {items?.map((e) => {
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
            })}
          </Grid>
        )}

        <br />
        <br />
        <Heading m="50px" color={"blue"}>
          Browse our Top coach & buss for Rent
        </Heading>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="40px"
        >
          {busState?.map((e) => {
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
          })}
        </Grid>
        <Heading m="50px" color={"blue"}>
          Browse our top pickup trucks for rent
        </Heading>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="40px"
        >
          {truckState?.map((e) => {
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
          })}
        </Grid>

        <Heading m="50px" color="blue">
          Browse our top safari mobiles for rent
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr ",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="40px"
        >
          {suvState?.map((e) => {
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
          })}
        </Grid>
        <Heading m="50px" color="blue">
          Wide range of Vehicles
        </Heading>
        <Box
          display="flex"
          gap="30px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <div>
            <img
              style={{ borderRadius: "20px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU"
              alt=""
            />
            <img
              style={{ borderRadius: "20px", marginTop: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "20px", height: "360px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ borderRadius: "20px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU"
              alt=""
            />
            <img
              style={{ borderRadius: "20px", marginTop: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU"
              alt=""
            />
          </div>
        </Box>
        <Button
          m="30px"
          borderRadius={"25px"}
          bg={"blue"}
          color={"white"}
          padding={"0 50px 0 50px"}
        >
          See All
        </Button>

        <br />
        <br />

        <Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ sm: "20px", md: "40px" }}
            m={{ sm: "20px 0", md: "50px 0" }}
          >
            <Card width={{ base: "100%", md: "30%" }} p="20px">
              <Heading color={"blue"}>Our results in numbers</Heading>
              <Heading>99%</Heading>
              <Heading as="h3" size="l">
                Customer Satisfaction
              </Heading>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet inventore voluptatum fuga soluta consequuntur obcaecati,
                quod molestiae, sit recusandae eaque repellendus quibusdam
                dolores animi quo asperiores iure, in blanditiis saepe!
              </Text>
            </Card>

            <Card width={{ sm: "100%", md: "30%" }} p="20px">
              <Heading color={"blue"}>Our results in numbers</Heading>
              <Heading>99%</Heading>
              <Heading as="h3" size="l">
                Customer Satisfaction
              </Heading>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet inventore voluptatum fuga soluta consequuntur obcaecati,
                quod molestiae, sit recusandae eaque repellendus quibusdam
                dolores animi quo asperiores iure, in blanditiis saepe!
              </Text>
            </Card>

            <Card width={{ sm: "100%", md: "30%" }} p="20px">
              <Heading color={"blue"}>Our results in numbers</Heading>
              <Heading>99%</Heading>
              <Heading as="h3" size="l">
                Customer Satisfaction
              </Heading>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet inventore voluptatum fuga soluta consequuntur obcaecati,
                quod molestiae, sit recusandae eaque repellendus quibusdam
                dolores animi quo asperiores iure, in blanditiis saepe!
              </Text>
            </Card>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
