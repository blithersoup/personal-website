import React, { useEffect, useRef } from "react";
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
  Link,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

interface refProps {
  now: AnimeInstance | null;
}

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
        <Heading as="h2" fontSize="xs" pl="5">
          {name}-
        </Heading>

        <Text fontSize="xs">
          [
          <Link href={source} color="blue" isExternal>
            source
          </Link>
          ]
        </Text>
      </Stack>

      <Stack pl="10" direction="column">
        <Text fontSize="xs">{languages}</Text>
        <Text fontSize="xs">{frameworks}</Text>
      </Stack>
    </Stack>
  );
};

const HomePage = () => {
  const start: refProps = { now: null };
  const animation = useRef(start);

  const router = useRouter();

  useEffect(() => {
    animation.current.now = anime({
      targets: "path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1800,
      direction: "forward",
      loop: false,
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
          <Box
            w={["95%", "65%"]}
            onClick={() => animation.current.now?.restart()}
          >
            <NameIcon />
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
            onClick={() => {
              router.push("#homepage");
            }}
          >
            <Image src="/upArrow.svg" alt="up arrow" height={50} width={50} />
          </Box>
          <Spacer />
        </Stack>
        <Box h="3%" />
        <Heading as="h1" fontSize="lg" pl="3">
          Interests
        </Heading>
        <Stack direction="column" pl="35">
          <Text fontSize="xs">-Backend Development</Text>
          <Text fontSize="xs">-Unix/Linux</Text>
          <Text fontSize="xs">-FOSS</Text>
        </Stack>
        <Heading as="h1" fontSize="lg" pl="3">
          Work Experience
        </Heading>
        <Text pl="35" pt="2" fontSize="sm">
          UnitedHealth Group- Software Engineering Intern
        </Text>
        <Text pl="42" fontSize="xs">
          Summer 2022
        </Text>
        <Heading as="h1" fontSize="lg" pl="3" pt="2">
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
          languages="-Python, JavaScript"
          frameworks="-Flask, SQLAlchemy, PostgreSQL, React Native"
          description="description"
          source="https://github.com/blithersoup/elo-server"
        />
      </Stack>
    </>
  );
};

export default HomePage;
