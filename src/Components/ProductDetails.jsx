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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function ProductDetails() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(0);

  const calculateDays = () => {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();

    if (startDateTime && endDateTime) {
      const millisecondsPerDay = 24 * 60 * 60 * 1000;
      const timeDifference = Math.abs(endDateTime - startDateTime);
      const numberOfDays = Math.round(timeDifference / millisecondsPerDay);

      setNumberOfDays(numberOfDays);
    }
  };
  useEffect(() => {
    calculateDays();
  }, [startDate, endDate]);

  return (
    <Box>
      <Grid>
        <GridItem>
          <FormControl>
            <Heading>Select Date & Time</Heading>
            <FormLabel>Pick up Date & Time</FormLabel>
            <Input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <FormLabel>Drop off Date & Time</FormLabel>
            <Input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <Text>Number of Days: {numberOfDays}</Text>
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
}
