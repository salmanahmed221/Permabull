import React, { useState } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  Hide,
  HStack,
  Show,
  Text,
  useDisclosure,
  VStack,
  DrawerContent,
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [placement, setPlacement]: any = React.useState("left");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack
      w="full"
    >
      <Box
        w="full"
      >
        <HStack
          justify="space-between"
          mx={["8", "8", "10", "14"]}
          textColor="white"
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            cursor="pointer"
            boxSize={["60px", "80.85px", "81.6px", "81.6px", "81.6px"]}
          >
            <Image
              src={"/logo.svg"}
              alt="/"
              height={102.85}
              width={81.6}
            />
          </Box>

          <VStack>
            <Hide below="md">
              {/* <Text
                w="full"
                fontSize="label_xs"
                as="span"
                mt="2"
                h="0.2"
                color="red"
              >
                comming soon
              </Text> */}

              <HStack
                spacing={{ base: 10, md: 10, lg: 10, xl: 10, '2xl': 20 }}
                fontSize={"20px"}
                fontWeight="medium"
                cursor="pointer"
              >
                <Text >
                  Products{" "}
                </Text>
                <Text>Whitepaper </Text>
                <Text>FAQ</Text>
                <Text>Team </Text>
                <Text>Contact us </Text>
                <></>
              </HStack>
            </Hide>
            <VStack>
              <Show below="md">
                <Box onClick={onOpen}>
                  <HamburgerIcon h="6" w="6" />
                </Box>

                <Drawer
                  blockScrollOnMount={false}
                  placement={placement}
                  onClose={onClose}
                  isOpen={isOpen}
                  size={"full"}
                >
                  <DrawerContent bg="transparent" backdropFilter="blur(10px)" onClick={onClose}>
                    <DrawerBody textAlign="center" p={0}>
                      <VStack spacing="10" fontSize="22px" mt="20">
                        <Text>Products </Text>
                        <Text>Whitepaper </Text>
                        <Text>FAQ</Text>
                        <Text>Team </Text>
                        <Text>Contact us </Text>
                      </VStack>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Show>
            </VStack>
          </VStack>
        </HStack>
      </Box>
    </VStack >
  );
};

export default Navbar;
