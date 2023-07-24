import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Product = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <VStack>
    <Box maxH="150px" maxW="150px">
      <Image
        src={`/assets/landing/products/${name}.svg`}
        alt={name.toUpperCase()}
        height={1000}
        width={1000}
      />
    </Box>
    <Text maxW="100%" textAlign="center" fontSize={{ base: "sm", md: "xl", lg: "xl", xl: "xl" }}>
      {description}
    </Text>
  </VStack>
);

const Products = () => {
  return (
    <VStack w="full" mt={{ base: "24", md: "32" }}>
      <VStack
        w="full"
        maxW={{ base: "full", md: "70%", lg: "80%" }}
        spacing={10}
      >
        {/* Heading and description */}
        <VStack maxW="90%">
          <Text
            fontSize={{ base: "3xl", lg: "5xl" }}
            fontWeight={600}
            textAlign="center"
          >
            EARNING CRYPTO WAS{" "}
            <Text color="perma-green" as="span">
              NEVER
            </Text>{" "}
            EASIER
          </Text>

          <Text fontSize={{ base: "lg", md: "xl", lg: "xl", xl: "xl" }} textAlign="center">
            Various products of our ecosystem allow users to earn money by
          </Text>
        </VStack>
        {/* Products */}
        <SimpleGrid columns={{ base: 3, lg: 3 }} spacing={{ base: 4, md: 10 }} px={{ base: 15, md: 0, lg: 0 }}>
          <Product name="games" description="Playing games" />
          <Product name="ads" description="Viewing ads" />
          <Product name="tasks" description="Completing tasks" />
          <Product name="surveys" description="Participating in surveys" />
          <Product name="audios" description="Listening to audio files" />
          <Product name="more" description="More to come" />
        </SimpleGrid>
      </VStack>
    </VStack >
  );
};

export default Products;
