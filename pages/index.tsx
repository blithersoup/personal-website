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
} from "@chakra-ui/react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/legacy/image";
import Link from "next/link"

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
          <Link href={source} color="blue">
            source
          </Link>
          ]
        </Text>
      </Stack>

      <Stack pl="10" direction="column">
        <Text fontSize="md">{languages}</Text>
        <Text fontSize="md">{frameworks}</Text>
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
              href="https://www.linkedin.com/in/gradyarnold/"
              colorScheme="linkedin"
              variant="outline"
            >
              LinkedIn
            </Button>
            <Button
              textAlign="left"
              size="md"
              as="a"
              href="https://github.com/blithersoup"
              colorScheme="orange"
              variant="outline"
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
      <Stack direction="column" height="100vh" id="experience">
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
        <Heading as="h1" size="lg" pl="3">
          Interests
        </Heading>
        <Stack direction="column" pl="35">
          <Text fontSize="md">-Backend Development</Text>
          <Text fontSize="md">-GNU/Linux</Text>
          <Text fontSize="md">-FOSS</Text>
        </Stack>
        <Heading as="h1" size="lg" pl="3">
          Work Experience
        </Heading>
        <Text pl="35" pt="2" fontSize="md">
          UnitedHealth Group- Software Engineering Intern
        </Text>
        <Text pl="42" fontSize="sm">
          Summer 2022
        </Text>
        <Heading as="h1" size="lg" pl="3" pt="2">
          Projects
        </Heading>
        <Project
          name="Purdue 3D Printed Prosthetics Club Website"
          languages="-Typescript, SQL"
          frameworks="-React, Next.js, Clerk, PostgreSQL"
          description="Main feature is "
          source="https://github.com/blithersoup/purdueprosthetics-3dprint-site"
        />
        <Project
          name="Twitter/News Sentiment Analysis Web App"
          languages="-Java, JavaScript"
          frameworks="-Spring Boot, React, Next.js"
          description="description"
          source="https://github.com/blithersoup/spring-project"
        />
        <Project
          name="ELO Ranking League App"
          languages="-Python, TypeScript"
          frameworks="-Flask, SQLAlchemy, PostgreSQL, Next.js"
          description="description"
          source="https://github.com/blithersoup/elo-server"
        />
      </Stack>
    </>
  );
};

export default HomePage;
