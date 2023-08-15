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
        <div key="1JmtmHo1q">
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
        </div>
        <div key="s8KKxkkK-I">
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
        </div>
        <div key="-soH1dpPoo">
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
        </div>
        <div key="oXyyu439N8">
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
        </div>
        <div key="LSTBvChq-E">
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
        </div>
        <div key="xLg9KaHDFT">
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
        </div>
        <div key="4PJUMDOsNz">
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
        </div>
        <div key="f-pwYO1YC1">
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
        </div>
        <div key="gPlnhZmcsA">
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
        </div>
        <div key="vrwYx_WyKi">
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
        </div>
        <div key="giZsR62w_Y">
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
        </div>
        <div key="O_qphCUYe9">
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
        </div>
        <div key="MHzrCy4tsk">
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
        </div>
        <div key="N1S8bsjqD6">
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
        </div>
        <div key="NHpYirag2j">
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
        </div>
        <div key="Rt2sfsBPl4">
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
        </div>
        <div key="dqNz-SsGT1N">
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
        </div>
        <div key="of500cRAA_o">
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
        </div>
        <div key="wrroU7A1RFU">
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
        </div>
        <div key="UStvPpDfdaX">
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
        </div>
        <div key="WfhpNjPNE31">
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
        </div>
        <div key="QyoOWWzs4E1">
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
        </div>
        <div key="QiUAWdNiDpI">
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
        </div>
        <div key="5-JRST_Whj6">
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
        </div>
        <div key="qlQBrq6zPy9">
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
        </div>
        <div key="gzuIYcmVtLX">
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
        </div>
        <div key="hf8Jh-mcjOK">
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
        </div>
        <div key="bNzJHVa5zIe">
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
        </div>
        <div key="zNP13fYDChZ">
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
        </div>
        <div key="6oRlD3VQQoZ">
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
        </div>
        <div key="QI47nnRXamD">
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
        </div>
        <div key="OLw7fPCedDK">
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
        </div>
        <div key="NkyCvCUF9Cd">
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
        </div>
        <div key="wAhTZWaxlZ4">
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
        </div>
        <div key="8BJEPTN1sNt">
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
        </div>
        <div key="vr-b5OxJfUu">
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
        </div>
        <div key="HE6j8lCVa7r">
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
        </div>
        <div key="FKrt-gc872m">
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
        </div>
        <div key="2FtOfo3xqAs">
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
        </div>
        <div key="a_387731Ntp">
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
        </div>
        <div key="qYta1imj1hK">
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
        </div>
        <div key="x38DvUKBpws">
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
        </div>
        <div key="SVrd1CWWe6-">
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
        </div>
        <div key="hri148yz0kA">
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
        </div>
        <div key="UgVwl0I3HcD">
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
        </div>
        <div key="NS_ZWSBfOtn">
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
        </div>
        <div key="jUlPXnIP2gD">
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
        </div>
        <div key="SVWTP4EqPB6">
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
        </div>
        <div key="Y6sP-tizhUb">
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
        </div>
        <div key="ofHDWQ5Jw_w">
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
        </div>
        <div key="mOOs8Cs7yy-">
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
        </div>
        <div key="lskHz0t6Cj0">
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
        </div>
        <div key="7XYGn9lGbTV">
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
        </div>
        <div key="yKTWmCRBAF9">
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
        </div>
        <div key="WwNodLKC-w-">
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
        </div>
        <div key="rPy-TzWSCGN">
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
        </div>
        <div key="lX5I1Qmo6pT">
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
        </div>
        <div key="213bwh8OT3a">
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
        </div>
        <div key="PdA800jxnSn">
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
        </div>
        <div key="RraGne50IGw">
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
        </div>
        <div key="N7rZwA081Mv">
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
        </div>
        <div key="UwQ3YtOyb_O">
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
        </div>
        <div key="Fnz0ld_1QdI">
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
        </div>
      </Stack>
    </>
  );
};

export default Page;
