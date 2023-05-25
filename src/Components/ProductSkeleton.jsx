import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Card,
  CardBody,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Flex,
} from "@chakra-ui/react";

export default function () {
  return (
    <>
      <GridItem>
        <Card padding="6" boxShadow="lg" bg="white">
          <Skeleton height="200px" fadeDuration={1} />
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="2" />
          <Skeleton height="40px" fadeDuration={1} />
        </Card>
      </GridItem>
      <GridItem>
        <Card padding="6" boxShadow="lg" bg="white">
          <Skeleton height="200px" fadeDuration={1} />
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="2" />
          <Skeleton height="40px" fadeDuration={1} />
        </Card>
      </GridItem>
      <GridItem>
        <Card padding="6" boxShadow="lg" bg="white">
          <Skeleton height="200px" fadeDuration={1} />
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="2" />
          <Skeleton height="40px" fadeDuration={1} />
        </Card>
      </GridItem>
      <GridItem>
        <Card padding="6" boxShadow="lg" bg="white">
          <Skeleton height="200px" fadeDuration={1} />
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="2" />
          <Skeleton height="40px" fadeDuration={1} />
        </Card>
      </GridItem>
      <GridItem>
        <Card padding="6" boxShadow="lg" bg="white">
          <Skeleton height="200px" fadeDuration={1} />
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="2" />
          <Skeleton height="40px" fadeDuration={1} />
        </Card>
      </GridItem>
      <GridItem>
        <Card padding="6" boxShadow="lg" bg="white">
          <Skeleton height="200px" fadeDuration={1} />
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="2" />
          <Skeleton height="40px" fadeDuration={1} />
        </Card>
      </GridItem>
      <GridItem>
        <Card padding="6" boxShadow="lg" bg="white">
          <Skeleton height="200px" fadeDuration={1} />
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="2" />
          <Skeleton height="40px" fadeDuration={1} />
        </Card>
      </GridItem>
      <GridItem>
        <Card padding="6" boxShadow="lg" bg="white">
          <Skeleton height="200px" fadeDuration={1} />
          <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="2" />
          <Skeleton height="40px" fadeDuration={1} />
        </Card>
      </GridItem>
    </>
  );
}
