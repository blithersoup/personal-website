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
    name: "Finishing My Dactyl Manuform",
    date: "May 26, 2024",
    tags: ["hobby"],
    id: 7,
    link: "dactyl",
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
            Finishing My Dactyl Manuform
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            Today I finished my{" "}
            <Link
              href="https://github.com/abstracthat/dactyl-manuform"
              color="blue"
              isExternal
            >
              Dactyl Manuform
            </Link>
            , which is a split, concave, ortholinear hand wired keyboard. I
            bought the materials about two years ago and it has been sitting in
            my room ever since because I was too worried about ruining the case
            to continue soldering it.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1540.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1541.JPG`}
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
            The whole thing had been put in a box and moved to and from school
            since I have had it, but has remained intact. Each side of the
            keyboard works by outputting a '1' to a column and reading which
            rows are active. The sides communicate via a serial connection with
            three pins: GND, VCC and a single data pin.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1542.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1543.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1544.JPG`}
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
            <Text fontSize="md">State of the project</Text>
          </Center>
        </div>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            When I first started the project, I glued the keycaps to the case
            and soldered the columns to the caps. I was following{" "}
            <Link
              href="https://www.youtube.com/watch?v=dWC_8BOArzc&list=PLJcTwFs4jAY0VnJDXhexZw7X3OIjXQkiY&pp=iAQB"
              color="blue"
              isExternal
            >
              this
            </Link>{" "}
            build stream, which suggested copper tape for the columns with
            nonconductive tape on top. This worked well, although if I were to
            make another I would try a different method. The next step is to
            wire the rows with diodes. This was especially tedious and took a
            long time.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1560.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Rows done
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1562.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    The setup
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1563.JPG`}
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
            The next step is wiring the rows and columns to the microcontroller.
            I have Raspberry Pi pro micro knockoffs for this project and used
            dupont connectors for the pins on the micro and on the end of row
            diodes. For the columns, I soldered the other side of the wire to
            the copper tape.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1564.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Rows only
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1565.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Soldered the columns
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
            I then soldered the pins to the microcontrollers and soldered dupont
            connectors to the RJ-9 jacks.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1566.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    A little sloppy
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1567.JPG`}
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
            With that it was about done. The layoud of the white keys is Colemak
            and the rest is custom; the far bottom left is print screen and far
            bottom right is backslash/pipe.
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1568.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Keycaps on
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1570.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Wired up
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
            I successfully flashed the firmware but the right side did not turn
            on. After some debugging, I realized that I ded not flip the wires
            on the RJ-9 jack. How silly!
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1571.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    Debugging with the ESP32
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1573.JPG`}
                      alt="Loading image"
                      objectFit="cover"
                      {...{ layout: "fill" }}
                    />
                  </Box>
                </Center>
                <Center maxW="100%" pt="3">
                  <Text fontSize="md" pl="5" pr="5">
                    The culprit, working version
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
            After that I had another hour of debugging faulty column connections
            before it worked.Great project overall, would recommend
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1584.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1585.JPG`}
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
                      src={`${process.env.NEXT_PUBLIC_IMG_HOST}/dactyl/IMG_1587.JPG`}
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
            <Text fontSize="md"> Final product</Text>
          </Center>
        </div>
      </Stack>
    </>
  );
};

export default Page;
