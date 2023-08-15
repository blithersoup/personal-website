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
    date: "June 18, 2023",
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0001.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0007.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0011.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0013.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_0016.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1076.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1080.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1106.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1185.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1221.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1237.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1251.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1278.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1284.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1385.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1401.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
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
        <Center maxW="100%" pt="5">
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1412.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1421.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1423.JPG`}
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
          <Box boxSize="md" position="relative" display="block" pl="2" pr="2">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_HOST}/australia/IMG_1425.JPG`}
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
    </>
  );
};

export default Page;
