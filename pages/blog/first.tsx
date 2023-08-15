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
    name: "Photos from Weeks 1-4",
    date: "February 6, 2023",
    tags: ["Study abroad", "photos"],
    id: 0,
    link: "first",
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
            Photos from Weeks 1-4
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            February 6, 2023
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0032.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0031.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0021.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0035.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">My dorm, Prince George's Park Residences</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0067.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0065.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Kent Ridge at dusk</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0039.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0044.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0046.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Visit to the National Gallery</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0052.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0049.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0051.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Views from the National Gallery roof</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0079.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0083.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0074.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0073.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Trip to Saint John's and Lazarus Islands</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0059.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0135.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0118.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0115.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Lunar New Year in Chinatown</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0186.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0190.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0189.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">
              Gloomy day at the marina and Gardens by the Bay
            </Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0009.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0167.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0182.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0192.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Random pictures</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0143.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0091.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
              <Center maxW="100%" pt="5">
                <Box
                  boxSize="md"
                  position="relative"
                  display="block"
                  pl="2"
                  pr="2"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0166.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5"></Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Some buildings</Text>
          </Center>
        </div>
      </Stack>
    </>
  );
};

export default Page;
