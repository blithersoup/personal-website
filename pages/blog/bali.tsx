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
        <div key="ih0tsRe1uc">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="8Wov9uWn_y">
                <div key="WB3d9DjYs">
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
                </div>
              </div>
              <div key="yiX79MXqYl">
                <div key="F2s2yX8GNd">
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
                </div>
              </div>
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
        <div key="f7rOP9TAUN">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="xK6skBExPa">
                <div key="tz5apVwhmM">
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
                </div>
              </div>
              <div key="FY9ky2MPeU">
                <div key="intdj-YQqy">
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
                </div>
              </div>
              <div key="Zozp0AWgr6">
                <div key="1GV24B8Zuw">
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
            We then decided to go to a Bali swing a short distance out of town.
          </Text>
        </Center>
        <div key="u8PiiZSWNW">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="KMAovt8Y2vK">
                <div key="-8tlUxHxav">
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
                </div>
              </div>
              <div key="zXp675XG8db">
                <div key="QESlgS-ZCG">
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
                </div>
              </div>
              <div key="gtLNHHpQ4g3">
                <div key="1xQLsho1Tv">
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
            After the swing, we took a taxi to a nearby rice field to see some
            sights.
          </Text>
        </Center>
        <div key="pxknFQ-XnbA">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="FHSjeuJsnoV">
                <div key="A0hGwKTkcRJ">
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
                </div>
              </div>
              <div key="wu7WrivviCK">
                <div key="DRM7kRPLX-V">
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
                </div>
              </div>
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
        <div key="OXRx2RjDlc7">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="md3fm7U-B6e">
                <div key="O4Blkqs3rAF">
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
                </div>
              </div>
              <div key="FN0_JaOG-84">
                <div key="TuBwbaA65ZK">
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
                </div>
              </div>
              <div key="aRymR0PkxbG">
                <div key="Mc-kpYfoL7m">
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
            The next day, the group went on an ATV tour in the morning and
            headed to the beachin the evening. We hung out and swam at the beach
            for a while, and headed before ourflight the next morning.
          </Text>
        </Center>
        <div key="gkwoSyVUbGb">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="vs3anTMhaGt">
                <div key="uCuicmfIzom">
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
                </div>
              </div>
              <div key="n80Tqr72ja0">
                <div key="U2_nqaw0sFh">
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
                </div>
              </div>
              <div key="rHC_mhQpAi1">
                <div key="Ne_EJ0UUC0c">
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
            We spent the next day in Jakarta. First, we checked into the hotel
            where one groupmember was staying. We then walked to Chinatown,
            which was a short distance away.
          </Text>
        </Center>
        <div key="G7M9YpYRyIO">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="11LA9mBtZOE">
                <div key="71F7ry3XKl6">
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
                </div>
              </div>
              <div key="mwxv2xBPmsl">
                <div key="P8VYKgV7tpp">
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
                </div>
              </div>
              <div key="cLrNIbEOR3O">
                <div key="fx9Go7dSRdg">
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
                </div>
              </div>
              <div key="anbspRDoDc2">
                <div key="JhJMZJV_ESk">
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
            We then headed to the center of the city to view the city from atop
            the nationalmonument. We saw the museum of Indonesian history
            inside, and checked out the skylinefrom the observation deck.
          </Text>
        </Center>
        <div key="lGW66GocC02">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="teRfA-flhiu">
                <div key="rAQ9Zs6CbVA">
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
                </div>
              </div>
              <div key="OuTeMcV2h1L">
                <div key="J7HJJgUVygZ">
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
                </div>
              </div>
              <div key="Mn0ZkJHRLwJ">
                <div key="sNqLCbLg5Ey">
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
                </div>
              </div>
              <div key="1W7UO1TqMfs">
                <div key="L3WtpM-kljF">
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
                </div>
              </div>
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
        <div key="CUyLVs0gZLI">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="DMFPQlla36r">
                <div key="FZBgnZPTsh0">
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
                </div>
              </div>
              <div key="uXFvMrJYMAU">
                <div key="zRtbLLxiBOM">
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
                </div>
              </div>
              <div key="TqkD7G2WmaU">
                <div key="lnddMng8eMK">
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
            The next morning, myself and a few others tried to sightsee before
            heading to theairport. Getting there, however, we got dropped off at
            the wrong location and walkedan hour and a half towards where we
            thought our destination was. As it turns out, wenavigated to the
            wrong location and were dropped in the wrong place for that aswell.
            It was still fun to walk along the road, and we headed to the
            airport once weran out of time.
          </Text>
        </Center>
        <div key="UfIkjYd2vjL">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="EetrjzstP4n">
                <div key="OOKzU_438UM">
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
                </div>
              </div>
              <div key="vYT9PV4sP3m">
                <div key="WYlPsRo-xBm">
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
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Views from the apartment in the morning</Text>
          </Center>
        </div>
        <div key="j3a7GSdf_iU">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="9HOsxnO7AUb">
                <div key="GS7SIjqCpYm">
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
                </div>
              </div>
              <div key="EAcnKRvQQJm">
                <div key="qin2Bu-zLrj">
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
                </div>
              </div>
              <div key="Hd0dWx7ITHn">
                <div key="PsbPRx52R4I">
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
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md"></Text>
          </Center>
        </div>
        <div key="vSYOu1Wuv4w">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="I0AjEM1oah2">
                <div key="AznH8s-q6sn">
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
                </div>
              </div>
              <div key="tsbxXZdhGZM">
                <div key="zEOCbtrvr91">
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
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Gas station on the way back</Text>
          </Center>
        </div>
        <div key="QRUQb7A6atJ">
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
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            As this blog was heavily delayed, below is a bonus mini-blog about
            my day trip toJohor Bahru in Malaysia. In short, myself and a friend
            took a train to and from theborder, and took taxis to random sites
            around the city.
          </Text>
        </Center>
        <div key="s07KBfRK-mi">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="HPLerEP599K">
                <div key="utbthsn4zcz">
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
                </div>
              </div>
              <div key="ev0zLd8UVn9">
                <div key="Tn9UDTjtrSY">
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
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Buildings</Text>
          </Center>
        </div>
        <div key="2tP-NDk7mR5">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="tftYoQH2Ikt">
                <div key="x2qIkCTFwzn">
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
                </div>
              </div>
              <div key="ucPS8Li9qf8">
                <div key="XN36hBAo4ix">
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
                </div>
              </div>
              <div key="VDrmuZcGWlG">
                <div key="mQcNttTUYaF">
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
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">More buildings</Text>
          </Center>
        </div>
        <div key="t_XIZn4bNwc">
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
        </div>
        <div key="GPyK-JGCgd2">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="EzZGT7doByT">
                <div key="yg9QC2U5pz4">
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
                </div>
              </div>
              <div key="Dg-CP-nSJvF">
                <div key="LDD2UqLk5Ne">
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
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">Inside some malls</Text>
          </Center>
        </div>
        <div key="Es15QV4bHYA">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="AsGXv7HXE-_">
                <div key="UyqsktDmX3z">
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
                </div>
              </div>
              <div key="CgP4350RAAP">
                <div key="LqAQ3CplaU1">
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
                </div>
              </div>
            </Stack>
          </Center>
          <Center maxW="100%" pt="5">
            <Text fontSize="md">High fashion</Text>
          </Center>
        </div>
        <div key="410nDlIjpkv">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="I5tBjN_iPN2">
                <div key="rRJwbHdHpig">
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
                </div>
              </div>
              <div key="gTMFc-spLeB">
                <div key="z8o9CeL-fMu">
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
                </div>
              </div>
              <div key="lY_xO5yWA9i">
                <div key="Ld7Rifm1Gnh">
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
                </div>
              </div>
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
