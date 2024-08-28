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
    name: "Adventures on the Yacutan Peninsula",
    date: "August 15, 2024",
    tags: ["photos"],
    id: 8,
    link: "yacutan",
  };
  return (
    <>
      <Head>
        <title>{meta.name}</title>
        <meta name="description" content={meta.name} />
        <meta name="theme-color" content="#228B22" />
      </Head>
      <Stack
        direction="column"
        maxWidth="100%"
        align="center"
        spacing="10"
        pt="5"
        pb="20"
      >
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h1" size="2xl">
            Adventures on the Yacutan Peninsula
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text
            fontSize="xl"
            pl="3"
            pr="3"
            maxWidth={{ base: "100vw", xl: "70vw" }}
          >
            Here are some pictures from a trip I took earlier this summer with
            my friend Emilio.
          </Text>
        </Center>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Isla Mujeres
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6297.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0001.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0003.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6304.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Cancun
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6324.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6339.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6350.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1601.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Cenote Azul
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0007.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0012.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0009.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Cenote Calavera
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6387.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0021.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Cenote Manati
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0013.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0002.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Chichen Itza
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6424.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6437.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6459.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6462.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6468.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6472.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6473.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6474.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Cenote LOL-HA
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0019.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6477.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Merida
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1606.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1608.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1612.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1613.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1616.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1618.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1619.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1620.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1621.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6482.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6489.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6492.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Valladolid
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6493.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6505.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6504.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6503.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6506.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0199.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6518.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0200.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6521.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1622.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Cenote Zaci
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_6514.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0156.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Ek Balaam
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1625.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0204.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0202.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1627.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1628.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1633.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1634.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_1638.JPG`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxWidth="100%">
          <Heading pl="3" pr="3" as="h2" size="xl">
            Cenote X'Canche
          </Heading>
        </Center>
        <div>
          <Center maxWidth="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0166.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0173.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0192.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
              <div>
                <Center maxWidth="100vw" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/yacutan/IMG_0197.jpg`}
                      alt="Loading image"
                      objectFit="contain"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxWidth="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5"></Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxWidth="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text
            fontSize="xl"
            pl="3"
            pr="3"
            maxWidth={{ base: "100vw", xl: "70vw" }}
          >
            Big thanks to Emilio's family for their hospitality and support!
          </Text>
        </Center>
      </Stack>
    </>
  );
};

export default Page;
