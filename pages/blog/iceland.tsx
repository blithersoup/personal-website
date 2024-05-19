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
    name: "A Week in Iceland",
    date: "May 19, 2024",
    tags: ["photos"],
    id: 5,
    link: "iceland",
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
            A Week in Iceland
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            May 19, 2024
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            This spring break, I traveled to Iceland with my friend Hugo. This
            blog is longer than my earlier ones, and in my opinion the pictures
            do not do Iceland justice; each place we saw was breathtaking. After
            a late night arrival, we began the first day with a hike.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1115.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Boarding
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1117.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    View from the hostel
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1119.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Street view
                  </Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The hike was up and over a tall hill, and we were a little lost the
            whole time. Along the way, we saw some interesting rock formations
            and plants.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1121.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Delicious Kanilstykki
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7524.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Setting off
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1122.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1126.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1128.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1130.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1131.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7542.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">At the top</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            Next, we started our journey along highway 1 to see the Reykjadalur
            hot springs.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1139.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1144.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1145.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7563.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    May have worn the wrong shoes
                  </Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The hot springs were the perfect temperature, and we bathed in them
            for over an hour.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1147.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7565.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1149.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/1F4D2005-7F3E-40E7-8F3C-F0079DA89F10.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Post hot springs meal
                  </Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then drove south to our hostel for the night. The next morning,
            we saw the Reynisfjara black sand beach.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1150.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1151.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1152.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1154.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1155.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1156.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1158.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1160.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            Afterwards, we drove to our next activity: hiking on Falljökull,
            part of the massive Vatnajökull glacier.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1164.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1165.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1166.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1171.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We hiked on the ice for several hours and even got to drink water
            off of the glacier!
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1173.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7583.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    At the bottom
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7585.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Crampons
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7590.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7594.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7595.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7597.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Looking back towards the ocean
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7600.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7608.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7609.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7613.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7633.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7638.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7640.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7643.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7645.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            That afternoon, we stopped at the Jökulsárlón glacial lagoon for
            lunch and made the drive to our hostel for the night in Höfn. The
            next day, we drove to Egilsstaðir, finding hikes along the way.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7660.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7664.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1175.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7684.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7685.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1189.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1211.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Fjord
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1216.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7690.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1217.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1223.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Classic meal
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1224.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            For the whole trip, the weather changed rapidly with small
            differences in location and elevation. Our next hike was very cold,
            and we saw Dettifoss, Europe's most powerful waterfall.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1233.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1237.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1247.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1249.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    The trail
                  </Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7707.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Chilly
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1254.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    The falls
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1257.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7715.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            Our second hike of the day was to Ásbyrgi, a glacial horseshoe
            canyon. Very neat!
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1263.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    The car may have gotten stuck here
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1265.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1269.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1271.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1274.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7723.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7724.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7726.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1280.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1284.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/FE9D7FF3-1953-4C18-8B4D-FAAE23608D77.jpg`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1288.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Boons betwixt the hikes
                  </Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"> </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            Our third hike was just as cold and to Goðafoss.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1289.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1292.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1299.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Downtown Akureyri
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1300.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The next morning, we headed to Reykjavik for the remainder of the
            trip. On the way, we stopped for a quick hike in a crater and saw
            the Settlement Center in Borgarnes.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1312.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7744.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/DA892F1F-A109-4906-8AF4-F5E31B77B07D.jpg`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7748.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7750.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1314.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1315.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7758.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Gourmet dinner
                  </Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            In Reykjavik, we saw the Perlan natural history museum and went
            whale watching the next day. The weather was intense, and we got to
            see a humpback whale!
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1319.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    View from the balcony at Perlan
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1320.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1321.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1322.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Fit check
                  </Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            On this day, we also checked out the Whales of Iceland museum, the
            International Phallological Museum, and the Reykjavík Art Museum
            Hafnarhús. In our time in Reykjavik, we also trekked around the
            coast of the city and got to walk through some neighborhoods.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1325.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1329.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1330.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1331.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1333.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1336.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1341.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1343.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The next day we drove the 'Golden Circle', which is a loop that has
            several natural attractions along it. We first saw some geysers,
            then the Gullfoss waterfall, and then a short hike to the Flúðir
            Tarn glacial lake.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1344.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1351.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1354.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1356.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1357.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1360.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1361.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1363.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1365.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1366.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1367.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1368.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We ended our final day with a trip to the lava show, which was
            excellent. Overall, I thoroughly enjoyed this trip and had a great
            time.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1370.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_7788.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1371.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1372.JPG`}
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
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={{ base: "column", xl: "row" }}>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1374.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Dropping off the rental car
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1376.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    A volcano erupting on the nearby Reykjanes penensula
                  </Text>
                </Center>
              </div>
              <div>
                <Center maxW="100%" pt="5">
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/iceland/IMG_1378.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Goodbye
                  </Text>
                </Center>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
      </Stack>
    </>
  );
};

export default Page;
