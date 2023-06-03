import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  HStack,
  Image,
  Grid,
  GridItem,
  Input,
  Flex,
  VStack,
  Container,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ADD_USER_DATA } from "../Redux/actionType";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Payment() {
  const [value, setValue] = useState("1");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNo: "",
    expDate: "",
    cvv: "",
    currentDateTime: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let price = window.localStorage.getItem("Price");
  let totalCost = +price + (18 / 100) * price;

  window.localStorage.setItem("totalCost", totalCost);

  const currentDateTime = new Date().toLocaleString();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      currentDateTime,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_USER_DATA,
      payload: userData,
    });
    console.log("userData", userData);
  };

  // const handleClick = () => {
  //   Swal.fire(
  //     "Payment successful!",
  //     "clicked the button To Print Invoice!",
  //     "success"

  //   );

  // };

  const handleClick = () => {
    Swal.fire({
      title: "Payment successful!",
      text: "clicked the button To Check Invoice!",
      icon: "success",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/invoice");
      }
    });
  };
  return (
    <Container
      m="50px auto"
      maxW="xl"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
    >
      <form onSubmit={handleSubmit}>
        <FormControl p="10px" isRequired>
          <Grid templateColumns="repeat(2, 1fr)" gap="20px">
            <GridItem>
              <Heading size="md" m="20px 0">
                BULLING ADDRESS
              </Heading>
              <FormLabel>Full Name: </FormLabel>
              <Input
                size="sm"
                type="text"
                name="name"
                placeholder="Enter Full Name"
                onChange={handleChange}
              />
              <FormLabel marginTop="8px">Email: </FormLabel>
              <Input
                size="sm"
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
              />
              <FormLabel marginTop="8px">Phone No. </FormLabel>
              <Input
                size="sm"
                type="number"
                name="phone"
                placeholder="Enter Phone No."
                onChange={handleChange}
              />
              <FormLabel marginTop="8px">Address : </FormLabel>
              <Input
                type="text"
                name="address"
                size="sm"
                placeholder="Apartment-Room no.- Street - locality"
                onChange={handleChange}
              />
              <FormLabel marginTop="8px">City : </FormLabel>
              <Input
                size="sm"
                type="text"
                name="city"
                placeholder="Enter City"
                onChange={handleChange}
              />
              <Flex marginTop="8px" alignItems="left">
                <Stack>
                  <FormLabel>State : </FormLabel>
                  <Input
                    size="sm"
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    onChange={handleChange}
                  />
                </Stack>
                &nbsp;&nbsp;
                <Stack>
                  <FormLabel>Zip Code : </FormLabel>
                  <Input
                    size="sm"
                    type="number"
                    name="zip"
                    placeholder="123 456"
                    onChange={handleChange}
                  />
                </Stack>
              </Flex>
            </GridItem>
            <GridItem>
              <Heading size="md" m="20px 0">
                PAYMENT FORM
              </Heading>
              <VStack display="flex" alignItems="flex-start" lineHeight="11px">
                <Text marginBottom="0px">Cost : {price} </Text>
                <Text>GST : 18% </Text>
                <Text>Total Cost : {totalCost}</Text>
              </VStack>
              <Divider m="6px" />
              <FormLabel>Cards Accepted</FormLabel>
              <HStack
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <RadioGroup>
                  <Stack direction="row">
                    <Radio value="1">
                      <Image
                        w="50px"
                        src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Straight.png"
                      />
                    </Radio>
                    <Radio value="2">
                      <Image
                        w="50px"
                        src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Visa-Straight.png"
                      />
                    </Radio>
                    <Radio value="3">
                      <Image
                        w="50px"
                        src="https://thetechpanda.com/wp-content/uploads/2018/06/RuPay_Logo-e1529422527708.jpg"
                      />
                    </Radio>
                    <Radio value="4">
                      <Image
                        w="50px"
                        src="https://www.nicepng.com/png/detail/360-3606562_bhim-logo-bhim-upi.png"
                      />
                    </Radio>
                  </Stack>
                </RadioGroup>
              </HStack>

              <FormLabel marginTop="8px">Name on Card:</FormLabel>
              <Input
                size="sm"
                type="text"
                name="cardName"
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <FormLabel marginTop="8px">Card Number:</FormLabel>
              <Input
                size="sm"
                type="number"
                name="cardNo"
                placeholder="0123-4567-8901-1234"
                onChange={handleChange}
              />
              <FormLabel marginTop="8px">Exp Month & Year:</FormLabel>
              <Input
                size="sm"
                type="month"
                name="expDate"
                onChange={handleChange}
              />
              <FormLabel marginTop="8px">CVV :</FormLabel>
              <Input
                size="sm"
                type="password"
                name="cvv"
                placeholder="1234"
                onChange={handleChange}
              />
            </GridItem>
          </Grid>
          <Button
            type="submit"
            w="100%"
            m="20px 0"
            colorScheme="blue"
            onClick={handleClick}
          >
            Proceed To Checkout
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
