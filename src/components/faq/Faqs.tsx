import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, VStack, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaqItems } from ".";

const Faqs = () => {
    return (
        <VStack w={"full"} mt={32}>
            <Text fontSize={{ base: "3xl", lg: "5xl" }} fontWeight={600} textAlign="center">FAQ</Text>
            <VStack w="full"
                maxW={{ base: "full", md: "70%", lg: "50%", xl: "40%", '2xl': "20%" }}>
                {FaqItems.map(({ Ques, awn }, index) => (
                    <Accordion key={index} allowToggle w={"full"}>
                        <AccordionItem as="span">
                            <VStack>
                                <AccordionButton w="full" fontWeight="semibold">
                                    <Box border="2px solid" borderRadius="full" w="9" h="8">
                                        <AddIcon w="3" h="3" color="perma-green" />
                                    </Box>

                                    <Box
                                        ml={{ base: "4", md: "3" }}
                                        w="full"
                                        textAlign="left"
                                        fontSize={{ base: "14px", md: "18px" }}
                                    >
                                        {Ques}
                                    </Box>
                                </AccordionButton>
                            </VStack>
                            <AccordionPanel
                                pb={4}
                                fontSize={{ base: "12px", md: "16px" }}
                            >
                                {awn}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                ))}
            </VStack>
        </VStack>
    );
};

export default Faqs