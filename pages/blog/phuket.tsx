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
    name: "Trip to Phuket and Ko Phi Phi Don, Thailand",
    date: "April 7, 2023",
    tags: ["Study abroad", "photos"],
    id: 3,
    link: "phuket",
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
            Trip to Phuket and Ko Phi Phi Don, Thailand
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            April 7, 2023
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            This blog is on my four day trip to Phuket and Phi Phi Islands,
            Thailand. The trip began with my group flying from Singapore to
            Phuket on Thursday afternoon.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0963.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Our pickup spot
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0965.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Mini bus
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
            {" "}
            After we landed, we got in a taxi that turned out to be a party bus
            and drove an hour to our hostel. The hostel was very nice, and we
            put our things away before checking out some of the nearby streets.
          </Text>
        </Center>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0967.JPG`}
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
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The next day, we rode to Kamala beach, which was a 45 minute drive
            north.{" "}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0004.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    On the way
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0971.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    From the car
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0003.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    The beach
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
            We hung out at that beach for most of the day, and then watched the
            sunset on the beach closer to our hostel.
          </Text>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            The next day, we took a ferry to Koh Phi Phi Don, where we would
            stay for the next two nights.
          </Text>
        </Center>
        <div>
          <Center maxW="100%" pt="5">
            <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0982.JPG`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
            </Box>
          </Center>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">
              Approaching our destination
            </Text>
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0986.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0987.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0989.JPG`}
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
            <Text fontSize="md">Islands along the way</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            Once there, we had dinner and hiked to a sightseeing spot near the
            top of one side of the island.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0990.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0992.JPG`}
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
            <Text fontSize="md">Views from the top</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            {" "}
            The next day, we woke up early and did a boat tour of some
            surrounding areas.{" "}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0999.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    On the way
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_1003.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Viking cove
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
            {" "}
            We first swam in a lagoon; the water was great.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_1005.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0002.JPG`}
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
            <Text fontSize="md">Lagoon</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            {" "}
            We then went to Maya bay, which is apparently the location of ‘The
            Beach (2000)’. I have never seen the movie, but as it turns out Phi
            Phi Islands gained most of their popularity after its release.{" "}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_1008.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0001.JPG`}
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
            <Text fontSize="md">Maya Bay</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            {" "}
            We then headed back and had a relaxing afternoon. A few hours later,
            Hugo and I decided to go kayaking in the bay near our hostel. We
            made it almost to sea, and got to see a cool rock formation near the
            ocean.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_1010.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    The bay
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_1044.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Kayaking
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_1048.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_0997.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Island cat
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/phuket/IMG_1016.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    The beach at night
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
            The next day all we did was head back to Singapore. Overall, I had a
            great time and thoroughly enjoyed the trip.
          </Text>
        </Center>
      </Stack>
    </>
  );
};

export default Page;
