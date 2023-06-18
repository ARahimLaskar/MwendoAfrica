import React from "react";
import { Heading, Flex, VStack } from "@chakra-ui/react";
import { FcBinoculars } from "react-icons/fc";

export default function NoPage() {
  return (
    <Flex justifyContent="center" alignItem="center">
      <VStack>
        <FcBinoculars size="200px" />
        <Heading color="red">No Page Found</Heading>
      </VStack>
    </Flex>
  );
}
