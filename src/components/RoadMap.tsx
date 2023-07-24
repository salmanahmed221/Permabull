import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function RoadMap() {
    return <VStack w={"full"}>
        <VStack w="full"
            maxW={{ base: "full", md: "70%", lg: "50%" }}>
            <Box mt={32}>
                <Text fontSize={{ base: "3xl", lg: "5xl" }} fontWeight={600} textAlign="center">
                    <Text color="perma-green" as="span">
                        ROAD
                    </Text>
                    MAP
                </Text>
            </Box>

            <Flex justify={"center"}>
                <Box mt={{ base: "20px", md: "40px", lg: "45px", xl: "50px", '2xl': "60px" }} mx={{ base: "9px", lg: "80px", md: "30px", xl: "0px", '2xl': "0px" }}>
                    <Image src="/assets/landing/roadmap/roadmap.svg" alt="Candle1" width={1000}
                        height={1000} />
                </Box>
            </Flex>
        </VStack>
    </VStack>
}

export default RoadMap;
