import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";
import Head from "next/head";
import { NameIcon } from "../components/name";
import { Container, Spacer, Stack, Box, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";



const HomePage = () => {

  
  const animation = useRef(null);

  const router = useRouter();

  useEffect(() => {
    animation.current = anime({
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
      <Stack direction="column" height="100vh" backgroundColor="black">
        <Spacer />
          <Stack direction="row" w="100%">
            <Box w="3%" />
            <Box w="65%" onClick={() => animation.current.restart()}>
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
            <Button textAlign="left" maxW="2xs" onClick={() => {router.push("https://www.linkedin.com/in/gradyarnold/")}} colorScheme="linkedin"  variant="outline" justify="left" align="left">
              LinkedIn
            </Button>
            <Button textAlign="left" maxW="2xs"  onClick={() => {router.push("https://github.com/blithersoup")}} colorScheme="gray" variant="outline" justify="left" align="left" >
              GitHub
            </Button>
            <Button textAlign="left" maxW="2xs"  onClick={() => {router.push("https://github.com/blithersoup")}} colorScheme="whiteAlpha" variant="outline" justify="left" align="left" >
              Resume
            </Button>
          </Stack>
          <Spacer />
        </Stack>

        
        <Spacer />
      </Stack>

    </>
  );
};

export default HomePage;
