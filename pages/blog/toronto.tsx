//@ts-nocheck
import {
  chakra,
  Stack,
  Center,
  Heading,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import NextImage from "next/legacy/image";
import Head from "next/head";

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["src", "alt", "objectFit", "layout"].includes(prop),
});
const Page = () => {
  const meta = {
    name: "Toronto: a Weekend in Photographs",
    date: "February 5, 2024",
    tags: ["photos"],
    id: 5,
    link: "toronto",
  };
  return (
    <>
      <Head>
        <title>{meta.name}</title>
        <meta name="description" content={meta.name} />
        <meta name="theme-color" content="#228B22" />
      </Head>
      <Stack direction="column" maxW="100%" spacing="10" pt="5" pb="20">
        <Center maxW="100%">
          <Heading pl="3" pr="3" as="h1" size="2xl">
            Toronto: a Weekend in Photographs
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            February 5, 2024
          </Text>
        </Center>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0510.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Crossing the border
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_9523.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Tim Horton's
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0529.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Flag
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_E8703.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Excellent poutine (gatekeeping)
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_9535.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              The 6ix at night
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_9558.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_9577.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_8813.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Views from the CN Tower
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_8877.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Royal Ontario Museum
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_8903.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0539.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_8923.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Ryerson
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0541.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0543.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              They have trains here
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0544.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Subway map
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0546.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_8974.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Stanley Cup
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0548.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Hockey Hall of Fame
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0554.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_0557.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/toronto/IMG_9004.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5"></Text>
          </Center>
        </div>
      </Stack>
    </>
  );
};

export default Page;
