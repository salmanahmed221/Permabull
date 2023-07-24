import { EcosystemWorkflow, Products, Tokenomics, RoadMap, Faqs } from "@/components";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Permabull</title>
        <meta
          name="description"
          content="A community driven DeFi 4.0 ecosystem bridging digital advertising to the blockchain with the help of AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/permabull.svg" />
      </Head>
      <Box>
        <Products />
        <EcosystemWorkflow />
        <Tokenomics />
        <RoadMap />
        <Faqs />
      </Box>
    </>
  );
}

// h="5442.33px"