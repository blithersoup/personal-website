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
        <div key="5evsHiJ6--">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="UYIcLpr7C5">
                <div key="WozBpD0bQ">
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
              <div key="i_9c82YCTc">
                <div key="tmJU03xbCR">
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
              <div key="o90Y2321wG">
                <div key="_cn9yChEHN">
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
              <div key="Y1pTLWEXmy">
                <div key="lJLOG-DlBS">
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
        <div key="P_GChpiLho">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="3aF1Cta9wQ">
                <div key="xwUHsegeo9">
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
              <div key="UQ_sWSnmPB">
                <div key="fgceb0XBGf">
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
        <div key="wQTb_Yq-dza">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="gXwBqZO6S1c">
                <div key="UgPdCy8uiU">
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
              <div key="o3c_oTWmx2R">
                <div key="OpNvjiV4qU">
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
              <div key="QdV6nNedgiq">
                <div key="0wZ3Mmow-0y">
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
        <div key="HSqfXL_qE85">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="DU-L-4ncqPg">
                <div key="q7qSARaT7wO">
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
              <div key="XJcFXFjjMQb">
                <div key="S9eSzfQzanb">
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
              <div key="4dkgztqo6uk">
                <div key="XWpcYWCKLKL">
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
        <div key="_T7oRkoFFuO">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="vHgDyrxUyun">
                <div key="UKn6mchOqCp">
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
              <div key="daUvI0a66_7">
                <div key="tyd2_AUqzqp">
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
              <div key="9MhVcnPBZmh">
                <div key="gpRoUi214VJ">
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
              <div key="sYQzjMCmbDk">
                <div key="s1cJKeJsuVB">
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
        <div key="eZwG4z5x3aj">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="wquRbEdszJv">
                <div key="sjJS6F7B0Sr">
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
              <div key="P3VkLigVPT0">
                <div key="ZGtIMpgLRIH">
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
              <div key="VmqcwnOfWlQ">
                <div key="4B0w9aKdqHj">
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
              <div key="ba1mXfrLhAX">
                <div key="HT0-u-3_wOg">
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
        <div key="3A0DN-2lw2y">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="VNrofUMz0SK">
                <div key="cOezeqay1hI">
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
              <div key="dkLM6ZdbCF8">
                <div key="CxkHf-pJzof">
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
              <div key="0AFACE9I6s8">
                <div key="zNubBkbNQDV">
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
        <div key="_HULgDbBfTp">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="wZfoxayOeJr">
                <div key="CDM2cLSMYYs">
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
              <div key="SphpvVWMsXA">
                <div key="0QSZHz1y-yC">
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
              <div key="eXpJ7A8A4wC">
                <div key="ocn_2VYdmBR">
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
              <div key="58SJxCviJoa">
                <div key="eUOL2tRWmJZ">
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
        <div key="9E59Ahkd9Ua">
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              <div key="t3XzIeLQtnP">
                <div key="klPGoGBeAjg">
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
              <div key="kSXukZ6xXsw">
                <div key="1fADgHDgcn0">
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
              <div key="7H2Wm_VjBgx">
                <div key="uhlrwWa7KWB">
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
