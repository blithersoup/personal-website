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
    name: "Photos from Weeks 1-4",
    date: "February 6, 2023",
    tags: ["Study abroad", "photos"],
    id: 0,
    link: "first",
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
            Photos from Weeks 1-4
          </Heading>
        </Center>
        <Center maxW="100%">
          <Text fontSize="xl" pl="3" pr="3" maxWidth={["100%", "80%"]}>
            February 6, 2023
          </Text>
        </Center>
        <div key="qSkIRXQYSm">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="Zfwl7BsvoK">
                <div key="1leFgC6_9">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0032.JPG`}
                        alt="Loading image"
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
              <div key="aS-l8iWEGb">
                <div key="1lc8NSJt5w">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0031.JPG`}
                        alt="Loading image"
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
              <div key="sM-Oc9xPDy">
                <div key="PyAe8GEOf8">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0021.JPG`}
                        alt="Loading image"
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
              <div key="yCepZntqX9">
                <div key="2RfAjBoN3d">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0035.JPG`}
                        alt="Loading image"
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
            <Text fontSize="md">My dorm, Prince George's Park Residences</Text>
          </Center>
        </div>
        <div key="otE6QRzyeh">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="-2zFYJh1Ka">
                <div key="GTKZVTZxoR">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0067.JPG`}
                        alt="Loading image"
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
              <div key="u30dICzTxV">
                <div key="y7q6ihR3Zy">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0065.JPG`}
                        alt="Loading image"
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
            <Text fontSize="md">Kent Ridge at dusk</Text>
          </Center>
        </div>
        <div key="NHOELGhD2fE">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="MaFGGzkPDhQ">
                <div key="Gvql7c_oBU">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0039.JPG`}
                        alt="Loading image"
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
              <div key="7q-z5VNguDZ">
                <div key="1OoOa8DpkC">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0044.JPG`}
                        alt="Loading image"
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
              <div key="VDWLxzTK8xP">
                <div key="8vQVbbS5es7">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0046.JPG`}
                        alt="Loading image"
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
            <Text fontSize="md">Visit to the National Gallery</Text>
          </Center>
        </div>
        <div key="Up-3sT5Qe3a">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="p9-6fxGJq5O">
                <div key="Kj10Opk8pYo">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0052.JPG`}
                        alt="Loading image"
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
              <div key="RPz3bsKEfIL">
                <div key="iJUZMU7OT0x">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0049.JPG`}
                        alt="Loading image"
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
              <div key="qfglYO0UypL">
                <div key="dixb-r4lCWX">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0051.JPG`}
                        alt="Loading image"
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
            <Text fontSize="md">Views from the National Gallery roof</Text>
          </Center>
        </div>
        <div key="nvpum7FajT4">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="Q_Evu8pcM4d">
                <div key="47TBz1Q7kyO">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0079.JPG`}
                        alt="Loading image"
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
              <div key="1rNPQtVvDU2">
                <div key="Wf5vnOpVMEe">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0083.JPG`}
                        alt="Loading image"
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
              <div key="QzZGAUUY4Gj">
                <div key="OA4463a7RRe">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0074.JPG`}
                        alt="Loading image"
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
              <div key="RIaMFTrYXbl">
                <div key="aLH87sFOeEi">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0073.JPG`}
                        alt="Loading image"
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
            <Text fontSize="md">Trip to Saint John's and Lazarus Islands</Text>
          </Center>
        </div>
        <div key="6RE7a5__n-X">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="3uPidAulpCm">
                <div key="eTekKb0dRo_">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0059.JPG`}
                        alt="Loading image"
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
              <div key="ASvNo_Vnba1">
                <div key="VcmHGFI_q1o">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0135.JPG`}
                        alt="Loading image"
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
              <div key="L1N3Q2BiiER">
                <div key="tU_qT8ScMw0">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0118.JPG`}
                        alt="Loading image"
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
              <div key="ZnJq2DqKytF">
                <div key="p8H_GBLOAQV">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0115.JPG`}
                        alt="Loading image"
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
            <Text fontSize="md">Lunar New Year in Chinatown</Text>
          </Center>
        </div>
        <div key="JWQ2cFAB0Ro">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="6yW7zcaSb9j">
                <div key="5UTzWDo1EiX">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0186.JPG`}
                        alt="Loading image"
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
              <div key="skP5exThQRW">
                <div key="N9wLAqO-AZT">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0190.JPG`}
                        alt="Loading image"
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
              <div key="kPC11Anp917">
                <div key="bS-d6S_LkMf">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0189.JPG`}
                        alt="Loading image"
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
              Gloomy day at the marina and Gardens by the Bay
            </Text>
          </Center>
        </div>
        <div key="OMxB2uDXiut">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="M58bnS66PU_">
                <div key="oj1unGnsi8Q">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0009.JPG`}
                        alt="Loading image"
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
              <div key="ZZzxUoYmi8y">
                <div key="9-xJjyrNqb3">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0167.JPG`}
                        alt="Loading image"
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
              <div key="KVr5hQ7Zq-i">
                <div key="MhXpHMbqkt6">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0182.JPG`}
                        alt="Loading image"
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
              <div key="D1XHr2puFK9">
                <div key="e2CxSLjqlzc">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0192.JPG`}
                        alt="Loading image"
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
            <Text fontSize="md">Random pictures</Text>
          </Center>
        </div>
        <div key="4nQpYmXg3uH">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="L48QVwUEDz_">
                <div key="WcW379x7ZwZ">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0143.JPG`}
                        alt="Loading image"
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
              <div key="2a-H_13woiS">
                <div key="8hxzrarwQcV">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0091.JPG`}
                        alt="Loading image"
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
              <div key="Om_BMpV80FJ">
                <div key="KuYvE61EHoW">
                  <Center maxW="100%" pt="5">
                    <Box
                      boxSize="md"
                      position="relative"
                      display="block"
                      pl="2"
                      pr="2"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_HOST}/blog-1/IMG_0166.JPG`}
                        alt="Loading image"
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
            <Text fontSize="md">Some buildings</Text>
          </Center>
        </div>
      </Stack>
    </>
  );
};

export default Page;
