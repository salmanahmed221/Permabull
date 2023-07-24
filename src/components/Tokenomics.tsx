import Image from "next/image";
import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Function = () => (
  <HStack justify="start" spacing={2}>
    <Box>
      <Image
        src="/assets/landing/tokenomics/reflection.svg"
        alt="Reflection"
        height={40}
        width={30}
      />
    </Box>

    <VStack align="start" spacing={0}>
      <Text fontWeight={600}>Relflection</Text>
      <Text fontWeight={200} fontSize="sm">
        3% is distributed to all existing holders.
      </Text>
    </VStack>
  </HStack>
);
const Tokenomics = () => {
  return (
    <VStack w="full" mt={32}>
      <VStack
        w="full"
        maxW={{ base: "full", md: "70%", lg: "50%" }}
        spacing={10}
      >
        {/* Heading */}
        <Text fontSize={{ base: "3xl", lg: "5xl" }} fontWeight={600} textAlign="center">
          <Text color="perma-green" as="span">
            TOKEN
          </Text>
          OMICS
        </Text>
        <Text fontWeight={200} textAlign="justify" maxW={{ lg: "70%" }} px={{ base: "15px", md: '0px', lg: "0px", xl: "0px", '2xl': '0px' }}>
          PermaBull (PMB) has a maximum supply of 10 000 000 000 (ten billion)
          tokens. Our unique combination of token functions and ecosystem
          workflow promotes the highest rate of supply deflation regardless of
          market conditions.
        </Text>
        <Stack
          w="full"
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
        >
          {/* Functions */}
          <VStack align={{ base: "center", lg: "start" }} spacing={7} ml={{ base: "0px", md: "0px", lg: "0px", xl: "0px", '2xl': "250px" }}>
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={600}>
              5 built-in token functions
            </Text>
            <Function />
            <Function />
            <Function />
            <Function />
            <Function />
          </VStack>

          {/* Image */}
          <Flex justify={"center"}>
            <Box mt={{ base: "30px", md: "60px", lg: "210px", xl: "110px", '2xl': '80px' }} mx={{ base: "0px", md: '0px', lg: "0px", xl: "0px", '2xl': '0px' }} mr={{ base: "0px", md: "0px", lg: "0px", xl: "0px", '2xl': "250px" }}>
              <Image
                src="/assets/landing/tokenomics/tokenomics-coin.png"
                alt="Tokenomics Coin"
                width={290}
                height={290}
              />
            </Box>
          </Flex>
        </Stack>
      </VStack>
      ;
    </VStack>
  );
};

export default Tokenomics;
