import React, { useEffect, useState } from "react";
import anime from "animejs";
import Head from "next/head";
import { NameIcon } from "../components/name";
import { Container, Spacer, Stack, Box, Text } from "@chakra-ui/react";



const HomePage = () => {

  
  useEffect(() => {
    anime({
      targets: "path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3500,
      direction: "forward",
      loop: "false",
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Personal website for Grady Arnold" />
        <title>Grady Arnold</title>
        <meta name="theme-color" content="#FFF" />
      </Head>
      <Stack direction="column" height="100vh">
        <Spacer />
          <Stack direction="row" w="100%">
            <Box w="3%" />
            <Box w="60%">
              <NameIcon width="100%" height="100%" />
            </Box>
            <Spacer />
          </Stack>
        <Box h="0.5%" />
        <Stack direction="row">
          <Box w="3%" />
          <Text maxW="100%" fontSize="xl">
            Long sentence title more text
          </Text>
        </Stack>
        <Stack direction="row">
          <Box w='4%' />
          <Stack pt="25" direction="column" justify="left">
            <Box textAlign="left" maxW="2xs" as="button"  href="https://www.linkedin.com/in/gradyarnold/" align="left">
              LinkedIn
            </Box>
            <Box textAlign="left" maxW="2xs" as="button" href="https://github.com/blithersoup" align="left">
              GitHub
            </Box>
          </Stack>
          <Spacer />
        </Stack>

        
        <Spacer />
      </Stack>

    </>
  );
};

export default HomePage;
