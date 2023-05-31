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

export default function Home() {
  const [carState, setCarState] = useState([]);
  const [busState, setBusState] = useState([]);
  const [truckState, setTruckState] = useState([]);
  const [suvState, setSuvState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://vehiches-data.onrender.com/vehicles?_limit=3&type=car`)
      .then((res) => {
        setCarState(res.data);
      });
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
    <Box w="80%" textAlign="center" m="20px auto">
      <div className="Carousal">
        <Carousel
          style={{ height: "60vh" }}
          // style={{ padding: "40px", width: "90%", marginLeft: "190px" }}
        >
          <Carousel.Item>
            <img
              style={{ borderRadius: "30px", height: "60vh" }}
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/292923.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ borderRadius: "30px", height: "60vh" }}
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/3497075.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ borderRadius: "30px", height: "60vh" }}
              className="d-block w-100"
              src="https://w0.peakpx.com/wallpaper/406/827/HD-wallpaper-bulli-on-tour-car-bus-toys-van-trip-travel-wood-holiday-vw.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />

      <Grid templateColumns="2fr 1fr" h="400px">
        <GridItem>
          <Image
            borderRadius="10px"
            w="100%"
            h="400px"
            objectFit="cover"
            p="10px"
            src="https://cdn.wallpapersafari.com/14/21/CAlr7m.jpg"
          />
        </GridItem>
        <GridItem>
          <Image
            borderRadius="10px"
            w="100%"
            h="200px"
            p="10px"
            src="https://c4.wallpaperflare.com/wallpaper/906/926/543/bugatti-chiron-sport-bugatti-supercars-car-wallpaper-preview.jpg"
          />
          <Image
            borderRadius="10px"
            w="100%"
            h="200px"
            p="10px"
            src="https://cdn.wallpapersafari.com/7/7/YCsHBq.jpg"
          />
        </GridItem>
      </Grid>
      <br />

      <br />
      <Heading m="50px" color={"blue"}>
        Browse out Top Sedans for Rent
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr 1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="40px"
      >
        {carState?.map((e) => {
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

      <br />
      <br />
      <Heading m="50px" color={"blue"}>
        Browse our Top coach & buss for Rent
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr 1fr",
          md: "repeat(3, 1fr)",
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
          base: "1fr 1fr",
          md: "repeat(3, 1fr)",
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
          base: "1fr 1fr",
          md: "repeat(3, 1fr)",
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
      <div style={{ display: "flex", gap: "50px" }}>
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
      </div>
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

      <div style={{ display: "flex", gap: "40px", margin: "50px 0" }}>
        <Card width={"30%"} p="20px">
          <Heading color={"blue"}>Our results in numbers</Heading>
          <Heading>99%</Heading>
          <Heading as="h3" size="l">
            Customer Satisfaction
          </Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            inventore voluptatum fuga soluta consequuntur obcaecati, quod
            molestiae, sit recusandae eaque repellendus quibusdam dolores animi
            quo asperiores iure, in blanditiis saepe!
          </Text>
        </Card>

        <Card width={"30%"} p="20px">
          <Heading color={"blue"}>Our results in numbers</Heading>
          <Heading>99%</Heading>
          <Heading as="h3" size="l">
            Customer Satisfaction
          </Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            inventore voluptatum fuga soluta consequuntur obcaecati, quod
            molestiae, sit recusandae eaque repellendus quibusdam dolores animi
            quo asperiores iure, in blanditiis saepe!
          </Text>
        </Card>

        <Card width={"30%"} p="20px">
          <Heading color={"blue"}>Our results in numbers</Heading>
          <Heading>99%</Heading>
          <Heading as="h3" size="l">
            Customer Satisfaction
          </Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            inventore voluptatum fuga soluta consequuntur obcaecati, quod
            molestiae, sit recusandae eaque repellendus quibusdam dolores animi
            quo asperiores iure, in blanditiis saepe!
          </Text>
        </Card>
      </div>
    </Box>
  );
}
