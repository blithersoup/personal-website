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
        <div key="Tv3EWa1JrJ">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="S13ly_ki99">
                <div key="_H91kZdCt">
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
              <div key="9sZYoj0qlC">
                <div key="yF8g8z8onK">
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
        <div key="_UA1nCUVbo">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="85XfkEKs9t">
                <div key="IXpCwlWffD">
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
              <div key="Yske9pgSge">
                <div key="WMpWCcIwPE">
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
              <div key="mFdc66psWn">
                <div key="0a_iX2CkY3">
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
        <div key="Hj58fRuAAQ">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="USVnoQNPVHr">
                <div key="Lqp_xiKFRU">
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
              <div key="0dm0pf9zjlB">
                <div key="w6cu1eYYmG">
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
              <div key="NsGYGy---CU">
                <div key="MADWjAt3rl">
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
        <div key="SYWmOC5UlN4">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="6U03PcCffoP">
                <div key="87yEiuL5TJ0">
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
              <div key="Y8ui8MBldc9">
                <div key="CAt0A9lv7Xc">
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
        <div key="hU8iMPKeQ9H">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="HnXthqNe_Y4">
                <div key="kFMrXZ8tMOU">
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
              <div key="mrZrLeFI-Zi">
                <div key="AmEGFYyW7lN">
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
              <div key="AYQg6ekVXGK">
                <div key="npkxqWgQeCz">
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
        <div key="duk9HhSXNmm">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="43rlNqT_kEB">
                <div key="lD3IgrL7rPz">
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
              <div key="fLwTNT8QBB7">
                <div key="b7yrB_pVPes">
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
              <div key="zuN_iyt6xKx">
                <div key="yoO9TbwBGoQ">
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
        <div key="u4RlVBY6YjC">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="SHUT8em3rAu">
                <div key="UW5XRLHAv16">
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
              <div key="wNUPlpIR0uV">
                <div key="yswcKewiP3p">
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
              <div key="A3cRJyz6sfy">
                <div key="fWiMCWdiMPv">
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
              <div key="bnu9sNcjbGh">
                <div key="ZX7qBSckcrT">
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
        <div key="u3NAeo70f33">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="u8LJrvNbY1R">
                <div key="Dw9AoHmik03">
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
              <div key="0XUtRnyPrCQ">
                <div key="isdf5fVpPJP">
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
              <div key="7e_2LUjWFbu">
                <div key="7phJ63PRrXi">
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
              <div key="gSXdAWIUw-S">
                <div key="CetIKLeDZcS">
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
        <div key="yZmb32UjkEk">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="Of-LfavUJdT">
                <div key="TILYrm9pUm5">
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
              <div key="P5rpQ9gJW0n">
                <div key="Fjkzj8qlogA">
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
              <div key="_eY11gDFJx2">
                <div key="PyECqvY-rfJ">
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
        <div key="1m4q_QN33Wi">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="FOdQqSo9f0j">
                <div key="0Qp3wnAnoQE">
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
              <div key="dvxvNpFJ_-z">
                <div key="hIS5kjiPS3Z">
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
        <div key="cns_AlQL8uP">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="S8Z_dQVunsM">
                <div key="ouPqenAGks1">
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
              <div key="3aXfiuJ49Vf">
                <div key="WHUomXr1FKP">
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
              <div key="8SoEr09ClmW">
                <div key="QVsIR7YaPa1">
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
        <div key="_6r0uQ5pCJi">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="8u9CW2npdTy">
                <div key="4AT454KS4xd">
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
              <div key="9O9PIrzo8Fm">
                <div key="Wt8faZ6kC3F">
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
        <div key="V6VpOVeSRL_">
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
        <div key="hTVUy70a6N_">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="8x0m7wM2noV">
                <div key="ywEzsx_vR2z">
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
              <div key="0WNGKODJoR0">
                <div key="FwCjNvTfsAI">
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
        <div key="NrQmO0ccrlu">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="WHoTyMFsVTL">
                <div key="SP3TPq5B60a">
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
              <div key="WjCvjHvkeTX">
                <div key="lTL1vNtepMM">
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
              <div key="Ly4JpaHEbex">
                <div key="LC8t82XTqPe">
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
        <div key="ZZqaX9j5_fD">
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
        <div key="G7kHQrWuZ-d">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="ZC7jO2pGqmq">
                <div key="cSH6aSRgPrm">
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
              <div key="QIbjGbSvXvo">
                <div key="OS1N_UzAbXB">
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
        <div key="bukrX0ElkiK">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="DWcsunmLvlb">
                <div key="Ai9OFEQWjnl">
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
              <div key="3DHoU9Ng2oM">
                <div key="mJQpbfzEouP">
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
        <div key="AFs2qUL5EQ6">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="TWmKYOiuO3_">
                <div key="PhTZ8fXAyOl">
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
              <div key="NOx2lk3lnsL">
                <div key="pDPN7JD6Y9v">
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
              <div key="bMK3OeN7LCE">
                <div key="OadgiHdzJjh">
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
