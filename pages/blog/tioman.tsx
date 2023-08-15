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
    name: "Spring Break Trip to Tioman Island, Malaysia",
    date: "March 19, 2023",
    tags: ["Study abroad", "photos"],
    id: 1,
    link: "tioman",
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
            Spring Break Trip to Tioman Island, Malaysia
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            March 19, 2023
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            This blog details the first part of my spring break where I went on
            a trip toTioman Island in Malaysia.
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            I got picked up at around 2am from my dorm by van. The roads were
            completelyempty, and it took about five hours to get to the port in
            mainland Malaysia.
          </Text>
        </Center>
        <div key="BRax3iz1zO">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="9NlOjQd7TT">
                <div key="-3Ug3M-PY">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0219.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      The pickup area
                    </Text>
                  </Center>
                </div>
              </div>
              <div key="ZahrTw77Q8">
                <div key="XSUp2gLy0C">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0221.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      A blurry shot from the van
                    </Text>
                  </Center>
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            I took a nap for about an hour until it was time to depart, and then
            boarded the ferry.
          </Text>
        </Center>
        <div key="E6B4AgtDU-">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="tGTNPiN-Ux">
                <div key="m9ba93J1a8">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0223.JPG`}
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
              </div>
              <div key="-dK7DI2Gaw">
                <div key="Bp-z44F88d">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0224.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Photos from the port</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            As it was still monsoon season, the ocean was very choppy; it seemed
            like the ferry movedup and down five feet with each wave.
          </Text>
        </Center>
        <div key="T41xQ__PrU">
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0226.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              A comforting classic, Top Gun: Maverick (Korean Sub) (Malaysian
              Sub)
            </Text>
          </Center>
        </div>
        <div key="z0Pp0xO9fy">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="jRMUZryWtw">
                <div key="FScKp4noVy">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0232.JPG`}
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
              </div>
              <div key="9Tc603Otge">
                <div key="KlUR9QX9lb">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0237.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            After landing on the island, we met with our driver for the weekend
            and headed to a resort nearby.We were traveling with another group
            that was staying where we arrived for the weekend, so we setdown our
            belongings and had lunch at a nearby chinese restaurant. We then
            took a short drive to thejetty that we would soon depart from.
          </Text>
        </Center>
        <div key="fx7-6CQunPz">
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0241.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Outside the resort
            </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then took an hour-long boat ride around the island to dragon
            horn.
          </Text>
        </Center>
        <div key="mc41cVkqt09">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="L2e4era4SaU">
                <div key="9AxDs0KKq26">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0243.JPG`}
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
              </div>
              <div key="mFJ7fEUM47X">
                <div key="N0y_azv4oll">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0245.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">
              The jetty; our boat was at the orange dock
            </Text>
          </Center>
        </div>
        <div key="EEHf_adDqU0">
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0455.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Aboard the boat
            </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            After the boat ride, we arrived at a village and walked through to
            the base of the mountain.
          </Text>
        </Center>
        <div key="iCF9t1ntKEw">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="_Gh6wj9n2Od">
                <div key="OuGG4KQTBEu">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0844.JPG`}
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
              </div>
              <div key="ZADZStMHrWd">
                <div key="Ubq5rsIBNnS">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0251.JPG`}
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
              </div>
              <div key="oWt-93koiEy">
                <div key="Hu5f5FiqVo4">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0250.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">
              At the dock, and dragons horn from a couple angles
            </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then hiked up the mountain, and the highest point that we reached
            was the last grassy point betweenthe peaks.
          </Text>
        </Center>
        <div key="qxyzDDivIA8">
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0797.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Checking out a boulder halfway up
            </Text>
          </Center>
        </div>
        <div key="h9Q0RDs8ZP4">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="vjeCRx_sLqc">
                <div key="zamNLAxfdYx">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0254.JPG`}
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
              </div>
              <div key="yw--z-MWP_U">
                <div key="h9vqZk9kL5C">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0256.JPG`}
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
              </div>
              <div key="Jnkqbxj7SQQ">
                <div key="S9Is9O-RkSx">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0259.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Views from near the top</Text>
          </Center>
        </div>
        <div key="EjZLNg48Ja6">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="_6kUQtDOHdf">
                <div key="fL_T8iAbmK0">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0260.JPG`}
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
              </div>
              <div key="Xe87p4Z_jY3">
                <div key="4iIEMn5kMmt">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0261.JPG`}
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
              </div>
              <div key="ukUU2-FE6av">
                <div key="IGWKftWi9gK">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0262.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">
              Photos from near the highest point we reached
            </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            After we hiked back down, we took a boat back to where we started on
            the island, collected our things,and took the truck across the
            island to where we would stay for the next two nights. We then
            settledinto our suite and had some western food. I then went to
            sleep early.
          </Text>
        </Center>
        <div key="3f4mKA4uu-D">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="nuNHYDoJrP2">
                <div key="zjDJ44wrZiH">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0469.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      After the hike
                    </Text>
                  </Center>
                </div>
              </div>
              <div key="YXFCO00DpSX">
                <div key="vo6wbjA3hQ2">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0461.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      View from the boat
                    </Text>
                  </Center>
                </div>
              </div>
              <div key="nsQzvJ-LVJ0">
                <div key="v_k_U_lsM3p">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0452.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      Buildings outside the jetty
                    </Text>
                  </Center>
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The next day, we started the day by walking the beach. One part was
            very rocky and had ponds with fishthat got washed up during high
            tide.
          </Text>
        </Center>
        <div key="Q0gju8Rxr0Y">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="QxEazAi701H">
                <div key="KP8VnWSprCQ">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0272.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      View from the room
                    </Text>
                  </Center>
                </div>
              </div>
              <div key="gl8KgPq-j-y">
                <div key="7FkQg6gXk7z">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0802.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      On the rocks
                    </Text>
                  </Center>
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then walked past a few resorts that were mostly empty because it
            was between dive and surf seasons.There was a sea turtle conservancy
            nearby, which was interesting. We had some snacks, and then played
            inthe ocean for a bit; as expected, the waves were substantial.
          </Text>
        </Center>
        <div key="31j0PWq4r-n">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="Q8uualufRGJ">
                <div key="_mf7TVzr0UU">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0630.JPG`}
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
              </div>
              <div key="bIQUlKGiQ7-">
                <div key="BlS1sRbHTzs">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0643.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            We then headed back to our resort and started the barbeque
          </Text>
        </Center>
        <div key="1DfV-hWvPk_">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="DBq0CAuNk_W">
                <div key="FEciraSCR15">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0276.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      Starting the fire
                    </Text>
                  </Center>
                </div>
              </div>
              <div key="ch1NQUwXLJT">
                <div key="44VOVMGN0-Y">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0284.JPG`}
                        alt="Loading image"
                        objectFit="cover"
                        {...{ layout: "fill" }}
                      />
                    </Box>
                  </Center>
                  <Center maxW="100%" pt="3">
                    <Text fontSize="md" pl="5" pr="5">
                      Before cooking
                    </Text>
                  </Center>
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            After dinner was finished, we headed to a beach nearby for some ice
            cream and stargazed before going to bed.
          </Text>
        </Center>
        <div key="AObtNTgv1Bq">
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0286.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Getting rid of extra lighter fluid
            </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The next day, I woke up early and then headed back across the island
            with the group. We departed from a nearbyjetty to go snorkeling,
            which I did not get any pictures of. I saw a coral reef and even
            some characters fromFinding Nemo! Also, apparently the king of
            Malaysia was on the island the day that we were there, so we saw
            somehelicopters flying overhead a few times. The group then headed
            back and hung out for a bit before getting on theferry back to the
            mainland.
          </Text>
        </Center>
        <div key="jFXlS5hVKPn">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="vHxVVtuiypN">
                <div key="2yI5eyibSqR">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0293.JPG`}
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
              </div>
              <div key="sDZsI_3T_bg">
                <div key="KtCmAx55jTW">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0294.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Views from the resort before leaving</Text>
          </Center>
        </div>
        <div key="K24BsfT4_Du">
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0239.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Ferry on the way back
            </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            Once on the mainland, we had a family style dinner at a Chinese
            restaurant. The staff was very friendly, and thefood we had was
            great. Halfway through, as it was going to rain in an hour, there
            was a cloud of bugs that descendedon the restaurant. The bugs were
            everywhere for a few minutes until a flock of birds cleared them
            out. After dinner,we waited for the van and headed back into
            Singapore.
          </Text>
        </Center>
        <div key="Vmxndn0geE0">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="p9WoUWbpwqW">
                <div key="eoUMsNTexsA">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0298.JPG`}
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
              </div>
              <div key="kHAPTULUduu">
                <div key="qZi2ML5Db9H">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0301.JPG`}
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
              </div>
              <div key="4Ily7VnCBir">
                <div key="pEGQUpvd-i7">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0296.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Restaurant and food</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}></Text>
        </Center>
        <div key="_nrO3jBXZzZ">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="GXt61nEPs-Z">
                <div key="Y8UZMdZPKbY">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0300.JPG`}
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
              </div>
              <div key="mNcUKLyfRHP">
                <div key="FsnynmgX5wS">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0297.JPG`}
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
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Outside the restaurant</Text>
          </Center>
        </div>
        <div key="X96Ht7Ml44Q">
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/tioman/IMG_0303.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Crossing the border into Singapore
            </Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            Overall, it was a lovely trip and I had a great time.
          </Text>
        </Center>
      </Stack>
    </>
  );
};

export default Page;
