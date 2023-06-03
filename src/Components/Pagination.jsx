import { Box, Center, Button, Text, HStack } from "@chakra-ui/react";
import { FcPrevious, FcNext } from "react-icons/fc";
import React from "react";

export default function Pagination({ pageNo, setPageno }) {
  return (
    <Center margin="50px">
      <Button
        variant="outline"
        colorScheme="blue"
        isDisabled={pageNo === 1}
        onClick={() => {
          setPageno(1);
        }}
      >
        <HStack>
          <FcPrevious size="20px" />
          <Text>Prev</Text>
        </HStack>
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="outline" colorScheme="blue">
        {pageNo}
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        variant="outline"
        colorScheme="blue"
        isDisabled={pageNo === 2}
        onClick={() => {
          setPageno(2);
        }}
      >
        <HStack>
          <Text marginBottom="0px">Next</Text>
          <FcNext size="20px" />
        </HStack>
      </Button>
    </Center>
  );
}
