import { Box, Text, Flex } from "@chakra-ui/react"
import Image from "next/image"

const Footer = () => {
  return (
    <Box>
      {/* Social media links */}
      <Box mt={20}>
        <Box width={"full"} height={"110px"} bgGradient="Linear(to-r, rgba(31, 206, 124, 0.29),rgba(31, 206, 124, 0.26),rgba(0, 66, 90, 0.23),rgba(255, 255, 255, 0.3))" border="1px" borderColor="rgba(255, 255, 255, 0.3)">
          <Flex justify={"space-evenly"} alignItems="center" mt={{ base: "5px", md: "25px" }} flexDirection={{ base: "column", md: "row", lg: "row", xl: 'row', '2xl': "row" }}>
            <Box>
              <Text fontSize={{ base: 'xl', md: "2xl", lg: "2xl", xl: '3xl', '2xl': "3xl" }}>FOLLOW US ON</Text>
            </Box>
            <Box mt={{ base: "5px", md: "0px", lg: "0px", xl: "0px", '2xl': "0px" }}>
              <Flex>
                <Image src="/assets/social-icons/twitter.svg" alt="twitter" width={60} height={60} />
                <Image src="/assets/social-icons/telegram.svg" alt="telegram" width={60} height={60} />
                <Image src="/assets/social-icons/discord.svg" alt="discord" width={60} height={60} />
                <Image src="/assets/social-icons/reddit.svg" alt="reddit" width={60} height={60} />
                <Image src="/assets/social-icons/medium.svg" alt="medium" width={60} height={60} />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box >
      {/* Terms and Condition */}
      <Box>
        <Flex mt={{ base: 6, md: 3, lg: 4, xl: 5, '2xl': 3 }} fontSize={"xl"} fontWeight={700} justify={{ md: "center" }} align={{ base: "center" }} gap={5} direction={{ base: "column", md: "row", lg: "row", xl: "row", '2xl': 'row' }}>
          <Text>Contact us</Text>
          <Text>Our Products</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms & Conditions</Text>
          <Text>Career</Text>
        </Flex>
      </Box>
      {/* Copyright Claim */}
      <Box>
        <Text fontSize={{ base: "10.6px", md: "16px"}} textAlign={"center"} my={5} fontWeight={400}>PERMABULL Copyright © 2023 Permabull - All rights reserved</Text>
      </Box>
    </Box>
  )
}


export default Footer


