import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";
import Head from "next/head";
import { NameIcon } from "../components/name";
import {
  Container,
  Spacer,
  Stack,
  Box,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

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
              colorScheme="orange"
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
              colorScheme="whatsapp"
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
        <Stack direction="row">
          <Spacer />
          <Box
            onClick={() => {
              router.push("#experience");
            }}
          >
            <Image src="/downArrow.svg" alt="down arrow" height={50} width={50} />
          </Box>
          <Spacer />
        </Stack>
      </Stack>
      <Stack direction="column" height="100vh" id="experience">
      <Stack direction="row">
          <Spacer />
          <Box
            onClick={() => {
              router.push("#homepage");
            }}
          >
            <Image src="/upArrow.svg" alt="up arrow" height={50} width={50} />
          </Box>
          <Spacer />
        </Stack>
        <Box h="3%" />
        <Heading as="h1">Projects</Heading>
        <Heading as="h2">Project 1</Heading>
        <div>hello</div>
        <Spacer />
      </Stack>
    </>
  );
};

export default HomePage;
