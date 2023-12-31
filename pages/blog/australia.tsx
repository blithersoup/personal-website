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
    name: "Aussie Road Trip from Sydney to Melbourne",
    date: "December 30, 2023",
    tags: ["Study abroad", "photos"],
    id: 4,
    link: "australia",
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
            Aussie Road Trip from Sydney to Melbourne
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            December 30, 2023
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            This blog details a trip to Australia that I took at the end of my
            study abroad semester with my friends Hugo and Mikołai.
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We began the trip by flying into Sydney, picking up the rental car,
            and driving to Bondi beach. After exploring the area in the
            afternoon, we decided to head to the opera house to catch the
            symphony that evening. We were not sure if we could get in, but
            ended up getting good tickets inside.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0001.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    At the opera
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1076.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Opera House
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1080.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Downtown Sydney
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
            The next day, we did a couple hikes in the Blue Mountains near
            Sydney. We started with the grand canyon track, and then drove over
            to , finishing late.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1089.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1106.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Old man on the trail!
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1113.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1099.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0003.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1125.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0002.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0004.JPG`}
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
            <Text fontSize="md">Great views!</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then drove down the coast to Wollongong, where we spent our
            afternoon.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0005.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1134.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1155.JPG`}
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
            <Text fontSize="md">Wollongong</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then finished the remainder of the drive to Durras North and
            camped there. We got to see plenty of kangaroos and bright stars.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1160.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1167.JPG`}
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
            The next morning, we took a hike along the shoreline from Depot
            Beach to near Pebbly Beach.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1170.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1172.JPG`}
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
            <Text fontSize="md">On the beach</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1185.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Wildlife encounter
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1173.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1176.JPG`}
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
            <Text fontSize="md">Hiking</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            After the hike, we had a long car ride to our next stop, Wilsons
            Promontory.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1187.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1188.JPG`}
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
            <Text fontSize="md">On the road</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1194.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1196.JPG`}
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
            <Text fontSize="md">Camping</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            At Wilsons Promontory, we checked out the dunes at Big Drift, which
            were some sand dunes overlooking the ocean.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1207.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1214.JPG`}
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
            <Text fontSize="md">Big Drift dunes </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            After that, we hiked Mount Bishop and visited Squaky Beach, which
            had sand that squaked when walked on.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1226.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0006.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1229.JPG`}
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
            <Text fontSize="md">Mount Bishop</Text>
          </Center>
        </div>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1228.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0008.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1237.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Squaky sand beach
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1221.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Excellent meal
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1251.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Very helpful sign!
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1202.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1253.JPG`}
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
            <Text fontSize="md">Flat tire in Wilsons Prom</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then had an afternoon in Melbourne before driving to the
            Grampians to camp.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1258.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1259.JPG`}
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
            <Text fontSize="md">Downtown Melbourne</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            While in the Grampians, we did the MacKenzie Falls via Zumsteins,
            Mount Rosea, and Pinnacle via wonderland hikes.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1278.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Our camping spot
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1282.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0010.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1286.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1289.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0012.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1318.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1323.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1326.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0015.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1363.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0013.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    May have been lost here
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1384.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1324.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1385.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Another old man!
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0019.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1306.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1386.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0009.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1382.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1389.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1390.JPG`}
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1393.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1453.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Early morning with an emu
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1375.JPG`}
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
            We then drove back to Melbourne, visiting organ pipes national park
            on the way.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1401.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Organ pipes
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1404.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1410.JPG`}
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
            The next morning, we drove on the Melbourne F1 course, which is open
            as a public road most of the time. I then flew back to Singapore.
          </Text>
        </Center>
        <div>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1403.JPG`}
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
                  <Box
                    boxSize="md"
                    position="relative"
                    display="block"
                    pl="2"
                    pr="2"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1412.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Melbourne at night
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1421.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    F1 course
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
            <Stack spacing="25px" direction={["column", "row"]}>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1423.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Packed day at the Changi Jewel
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1425.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Train stop for my dorm
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
