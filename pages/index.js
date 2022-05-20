import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";
import Head from "next/head";
import { NameIcon } from "../components/name";
import {
  Container,
  Spacer,
  Stack,
  Box,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";

const HomePage = () => {
  const animation = useRef(null);

  const router = useRouter();

  useEffect(() => {
    animation.current = anime({
      targets: "path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
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
      <Stack
        direction="column"
        height="100vh"
        backgroundColor="black"
        id="homepage"
      >
        <Box h="35%" />
        <Stack direction="row" w="100%">
          <Box w="3%" />
          <Box w={["95%", "65%"]} onClick={() => animation.current.restart()}>
            <NameIcon width="100%" height="100%" />
          </Box>
          <Spacer />
        </Stack>
        <Box h="0.5%" />
        <Stack direction="row">
          <Box w="3%" />
          <Heading as="h4" fontSize="xl" color="white">
            Software Engineer, Student
          </Heading>
        </Stack>
        <Stack direction="row">
          <Box w="4%" />
          <Stack pt="25" direction="column" justify="left">
            <Button
              textAlign="left"
              size="md"
              onClick={() => {
                router.push("https://www.linkedin.com/in/gradyarnold/");
              }}
              colorScheme="linkedin"
              variant="outline"
              justify="left"
              align="left"
              rightIcon={<FaLinkedin />}
            >
              LinkedIn
            </Button>
            <Button
              textAlign="left"
              size="md"
              onClick={() => {
                router.push("https://github.com/blithersoup");
              }}
              colorScheme="teal"
              variant="outline"
              justify="left"
              align="left"
              rightIcon={<FaGithub />}
            >
              GitHub
            </Button>
            <Button
              textAlign="left"
              size="md"
              onClick={() => {
                router.push("/resume.pdf");
              }}
              colorScheme="green"
              variant="outline"
              justify="left"
              align="left"
            >
              Resume
            </Button>
          </Stack>
          <Spacer />
        </Stack>
        <Spacer />
        <Box align="center" size="xl" textColor="white" fontSize="5xl">
          <IoIosArrowDown
            onClick={() => {
              router.push("/#experience");
            }}
          />
        </Box>
        <Box h="0.5%" />
      </Stack>
      <Stack direction="column" height="100vh" id="experience">
        <Box textColor="black" align="center" size="xl" fontSize="5xl">
          <IoIosArrowUp
            onClick={() => {
              router.push("/#homepage");
            }}
          />
        </Box>
        <Box h="3%" />
        <Heading as="h6">Projects</Heading>
        <Heading as="h2">Project 1</Heading>
        <div>hello</div>
        <Spacer />
      </Stack>
    </>
  );
};

export default HomePage;
