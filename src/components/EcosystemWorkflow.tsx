import { Box, Flex, HStack, Hide, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const EcosystemWorkflow = () => {
  return (
    <VStack w="full" mt={{ base: 16, md: 24, lg: 40 }} px={{ base: 15, md: 0, lg: 0 }}>
      <VStack maxW={{ base: "95%", md: "80%", lg: "80%", xl: "80%" }}>
        <Text fontSize={{ base: "3xl", lg: "5xl" }} fontWeight={600} textAlign="center">
          <Text color="perma-green" as="span">
            ECOSYSTEM
          </Text>{" "}
          WORKFLOW
        </Text>
        <Flex gap={20} justify="center" mt="20px" display={{ md: "flex", lg: "flex" }}>
          <Text
            fontWeight={200}
            w="full"
            maxW={{ base: "90%", sm: "80%", md: "70%", lg: "45%" }}
            textAlign="justify"
            ml={{ base: "18px", md: "0px", lg: "0px", xl: "0px", '2xl': "0px" }}
            pl={{ base: "0px", md: "0px", xl: "0px", lg: "0px", '2xl': "200px" }}
          >
            In 2022, worldwide digital advertising revenue was estimated at $600
            000 000 000. We are the first project which gives users the
            opportunity to simultaneously generate income and promote supply
            deflation of PermaBull tokens. WITHOUT any investment, anyone with
            just access to the internet and a crypto wallet can earn PMB tokens.
            Let’s break down the workflow of our ecosystem.
          </Text>
          <Hide below="md">
            <Box h="350px" w="350px" maxW="40%">
              <Image
                src="/assets/landing/ecosystem/mobile.svg"
                alt="Mobile Phone"
                height={1000}
                width={1000}
              />
            </Box>
          </Hide>
        </Flex>
        <Box
          h={{ base: "200px", sm: "100px", lg: "700px" }}
          w="full"
          position="relative"
          mt={{ base: 10, lg: -40, xl: -10 }}
        >
          <Image
            src="/assets/landing/ecosystem/ecosystem-workflow.svg"
            alt="Mobile Phone"
            fill
          />
        </Box>
      </VStack>
    </VStack >
  );
};

export default EcosystemWorkflow;
