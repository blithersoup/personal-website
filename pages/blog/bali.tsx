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
    name: "Spring Break Trip to Bali and Jakarta",
    date: "April 5, 2023",
    tags: ["Study abroad", "photos"],
    id: 2,
    link: "bali",
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
            Spring Break Trip to Bali and Jakarta
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            April 5, 2023
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            This blog covers the second half of my spring break trip, in which I
            traveled to Baliand Jakarta. The trip began the morning after I got
            back from Malaysia. Due to thisfact (and because my alarm was set to
            the quietest possible volume), I may have notwoken up in time for my
            flight and had to leave later in the day. The photos startfrom the
            day after I flew in.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0327.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0325.JPG`}
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
            <Text fontSize="md">Downtown Ubud</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We stayed in Kuta, which is in the south of the island. To begin the
            day, we took ataxi from our residence to Ubud, which was a bit over
            an hour drive north. We walkedthe streets and saw a few sights, and
            then took a hike up a hill nearby.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0331.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Temple in town
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0332.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_6897.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Group at lunch
                </Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then decided to go to a Bali swing a short distance out of town.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0341.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Statue at a cafe
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0342.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  On the drive
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_6974.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  On the swing
                </Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            After the swing, we took a taxi to a nearby rice field to see some
            sights.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0345.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0348.JPG`}
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
            <Text fontSize="md">Field in question</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The plan after that was to head to a gate and then to a large
            temple, but we ranout of daylight before heading to the temple.
            There was also a holiday during ourstay, so the roads in some areas
            we went to were packed. We stayed at the gate fora short bit and
            then took a long drive back.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0350.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0351.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0364.JPG`}
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
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The next day, the group went on an ATV tour in the morning and
            headed to the beachin the evening. We hung out and swam at the beach
            for a while, and headed before ourflight the next morning.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0381.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  On the road
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_7270.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  At ATVs
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0384.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Beach restaurant
                </Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We spent the next day in Jakarta. First, we checked into the hotel
            where one groupmember was staying. We then walked to Chinatown,
            which was a short distance away.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0392.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  View from the hotel
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0394.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Chinatown
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0395.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Busy market
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0434.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Sleepy at a food court
                </Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then headed to the center of the city to view the city from atop
            the nationalmonument. We saw the museum of Indonesian history
            inside, and checked out the skylinefrom the observation deck.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0401.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0406.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0407.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0409.JPG`}
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
            <Text fontSize="md">National monument</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then headed to our stay for the night, which was an apartment
            halfway to theairport. It was nice but very difficult to find.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0410.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Cathedral near the monument
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0412.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  View from the apartment
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0413.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Local fruits we tried
                </Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The next morning, myself and a few others tried to sightsee before
            heading to theairport. Getting there, however, we got dropped off at
            the wrong location and walkedan hour and a half towards where we
            thought our destination was. As it turns out, wenavigated to the
            wrong location and were dropped in the wrong place for that aswell.
            It was still fun to walk along the road, and we headed to the
            airport once weran out of time.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0415.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0416.JPG`}
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
            <Text fontSize="md">Views from the apartment in the morning</Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0421.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  Great deal! Byu one, get one
                </Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0423.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0425.JPG`}
                    alt="Loading image"
                    objectFit="cover"
                    {...{ layout: "fill" }}
                  />
                </Box>
              </Center>
              <Center maxW="100%" pt="3">
                <Text fontSize="md" pl="5" pr="5">
                  A Chinese elementary school
                </Text>
              </Center>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0435.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0436.JPG`}
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
            <Text fontSize="md">Gas station on the way back</Text>
          </Center>
        </div>
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0432.JPG`}
              alt="Loading image"
              objectFit="cover"
              {...{ layout: "fill" }}
            />
          </Box>
        </Center>
        <Center maxW="100%" pt="3">
          <Text fontSize="md" pl="5" pr="5">
            Some monkeys outside the food court at my dorm
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            As this blog was heavily delayed, below is a bonus mini-blog about
            my day trip toJohor Bahru in Malaysia. In short, myself and a friend
            took a train to and from theborder, and took taxis to random sites
            around the city.
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0901.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0910.JPG`}
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
            <Text fontSize="md">Buildings</Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0921.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0913.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0920.JPG`}
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
            <Text fontSize="md">More buildings</Text>
          </Center>
        </div>
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0911.JPG`}
              alt="Loading image"
              objectFit="cover"
              {...{ layout: "fill" }}
            />
          </Box>
        </Center>
        <Center maxW="100%" pt="3">
          <Text fontSize="md" pl="5" pr="5">
            Crosswalk
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0903.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0917.JPG`}
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
            <Text fontSize="md">Inside some malls</Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0908.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0909.JPG`}
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
            <Text fontSize="md">High fashion</Text>
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0925.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0900.JPG`}
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
                    src={`${process.env.NEXT_PUBLIC_IMG_HOST}/bali/IMG_0926.JPG`}
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
            <Text fontSize="md">Madness at the border</Text>
          </Center>
        </div>
      </Stack>
    </>
  );
};

export default Page;
