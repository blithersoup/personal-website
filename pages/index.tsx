import React, { useEffect, useState } from "react";
import anime, { AnimeInstance } from "animejs";
import Head from "next/head";
import NameIcon from "../components/name";
import {
  Spacer,
  Stack,
  Box,
  Button,
  Heading,
  Text,
  Link
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/legacy/image";

interface projectProps {
  name: string;
  languages: string;
  frameworks: string;
  description: string;
  source: string;
}

const Project = ({
  name,
  languages,
  frameworks,
  description,
  source,
}: projectProps) => {
  return (
    <Stack>
      <Stack direction="row" pt="2">
        <Heading as="h2" size="md" pl="5">
          {name}-
        </Heading>

        <Text fontSize="lg">
          [
          <Link href={source} color="blue" isExternal>
            source
          </Link>
          ]
        </Text>
      </Stack>

      <Stack pl="10" direction="column" maxW={["100%", "55%"]}>
        <Text fontSize="lg">{description}</Text>
      </Stack>
    </Stack>
  );
};

const HomePage = () => {

  const [animation, setAnimation] = useState<AnimeInstance|null>(null);
  
  
  useEffect(() => {
    setAnimation( 
      anime({
        targets: "path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1800,
        direction: "forward",
        loop: false,
      })
    );
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
          <Box
            w={["95%", "65%"]}
            onClick={() => animation?.restart()}
          >
            <NameIcon />
          </Box>
          <Spacer />
        </Stack>
        <Box h="0.5%" />
        <Stack direction="row">
          <Box w="3%" />
          <Heading as="h4" size="xl" color="white" pt="5">
            Software Engineer, Student
          </Heading>
        </Stack>
        <Stack direction="row">
          <Box w="4%" />
          <Stack pt="25" direction="column" justify="left">
            <Button
              textAlign="left"
              size="md"
              as="a"
              href="https://github.com/blithersoup"
              colorScheme="orange"
              variant="outline"
              rightIcon={<FaGithub />}
            >
              GitHub
            </Button>
            <Button
              textAlign="left"
              size="md"
              as="a"
              href="/resume.pdf"
              colorScheme="whatsapp"
              variant="outline"
            >
              Resume
            </Button>
            <Button
              textAlign="left"
              size="md"
              as="a"
              href="https://www.linkedin.com/in/gradyarnold/"
              colorScheme="linkedin"
              variant="outline"
              rightIcon={<FaLinkedin />}
            >
              LinkedIn
            </Button>
          </Stack>
          <Spacer />
        </Stack>
        <Spacer />
        <Stack direction="row">
          <Spacer />
          <Box
            as="a"
            href="#experience"
          >
            <Image
              src="/downArrow.svg"
              alt="down arrow"
              height={50}
              width={50}
            />
          </Box>
          <Spacer />
        </Stack>
      </Stack>
      <Stack direction="column" id="experience" pb="15">
        <Stack direction="row">
          <Spacer />
          <Box
            as="a"
            href="#homepage"
          >
            <Image src="/upArrow.svg" alt="up arrow" height={50} width={50} />
          </Box>
          <Spacer />
        </Stack>
        <Box h="3%" />
        <Heading as="h1" size="xl" pl="3">
          Interests
        </Heading>
        <Stack direction="column" pl="35">
          <Text fontSize="lg">-Backend Development</Text>
          <Text fontSize="lg">-GNU/Linux</Text>
          <Text fontSize="lg">-FOSS</Text>
        </Stack>
        <Heading as="h1" size="xl" pl="3">
          Work Experience
        </Heading>
        <Text pl="35" pt="2" fontSize="lg">
          UnitedHealth Group- Software Engineer Intern
        </Text>
        <Text pl="42" fontSize="md">
          Summer 2022
        </Text>
        <Text pl="35" pt="2" fontSize="lg">
          Walmart Global Tech- Software Engineer II Intern
        </Text>
        <Text pl="42" fontSize="md">
          Summer 2023
        </Text>
        <Heading as="h1" size="xl" pl="3" pt="2">
          Projects
        </Heading>
        <Project
          name="2048 Solver"
          languages="-Python, C++"
          frameworks="-CMake"
          description="This project is a simple 2048 game with algorithms to provide moves.  I was able to use cppyy to execute c++ functions within python."
          source="https://github.com/blithersoup/2048-solver"
        />
        <Project
          name="Linear System of Equations Solver"
          languages="-C, Python"
          frameworks="-CPython"
          description="This implements a couple of algorithms to solve linear systems of equations in a Python library.  The main purpose of the project was to create a library with the Python interface in C, which I was able to do."
          source="https://github.com/blithersoup/linear-system-solver"
        />
        <Project
          name="ELO Ranking League App"
          languages="-Python, TypeScript"
          frameworks="-Flask, SQLAlchemy, PostgreSQL, Next.js"
          description="ELO implementation for local rankings that takes games as entries and updates a leaderboard.  It uses Flask for the backend, and worked well when deployed."
          source="https://github.com/blithersoup/elo-server"
        />
        <Project
          name="Purdue 3D Printed Prosthetics Club Website"
          languages="-Typescript, SQL"
          frameworks="-React, Next.js, Clerk, PostgreSQL"
          description="Scheduling website with authentication and admin controls.  I was able to implement some more advanced react features as well as a RESTful API that interacts with postgres."
          source="https://github.com/blithersoup/purdueprosthetics-3dprint-site"
        />
        <Project
          name="Twitter/News Sentiment Analysis Web App"
          languages="-Java, JavaScript"
          frameworks="-Spring Boot, React, Next.js"
          description="Simple website with a Spring Boot backend.  Aside from the frameworks used, I was able to learn how to use enterprise APIs."
          source="https://github.com/blithersoup/spring-project"
        />
      </Stack>
    </>
  );
};

export default HomePage;
