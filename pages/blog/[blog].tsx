import { Text, Heading, Stack, Box, Spacer, Center, chakra } from "@chakra-ui/react"
import NextImage from "next/legacy/image";
import { readdirSync } from "fs";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import type { Blog, Item } from "../blog"


const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "alt",
      "objectFit",
      "layout"
    ].includes(prop),
});


const parseItem = (item: any) => {
  switch (item.type) {
    case "text":
      return (
        <Stack direction="row">
          <Spacer />
          <Text fontSize="lg" pt="5" width="80%">
            {item.body}
          </Text>
          <Spacer />
        </Stack>
      )
    case "image":
      return (
        <>
          <Stack direction="row" w="100%" pt="5">
            <Spacer />
            <Box boxSize="md" position="relative" display="block">
              <Image src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${item.body}`}
                alt="Loading image"
                objectFit="cover"
                {...{ layout: "fill" }}
              />
              <Text fontSize="md">{item.caption}</Text>
            </Box>
            <Spacer />
          </Stack>
          <Center maxW="100%" pt="3">
            <Text fontSize="md" pl="5" pr="5">{item.caption}</Text>
          </Center>
        </>
      )
    case "row":
      let i = 0;
      return (
        <>
          <Center maxW="100%">
            <Stack spacing="25px" direction={["column", "row"]}>
              {item.body.map((it: any) => <div key={i++}>{parseItem(it)}</div>)}
            </Stack>
          </Center>

          <Center maxW="100%" pt="5">
            <Text fontSize="md">
              {item.caption}
            </Text>
          </Center>
        </>
      )
  }
}


/*
<Stack direction="row" w="100%" pt="5">
            <Spacer />
            <Text fontSize="md">
              {item.caption}
            </Text>
            <Spacer />
          </Stack>
*/
const parseBlog = (json: Blog) => {
  let i = 0;
  return (
    <>
      <Head>
        <title>{json.name}</title>
        <meta name="description" content={json.name} />
      </Head>
      <Heading size="2xl" textAlign="center" pt="5">
        {json.name}
      </Heading>
      <Text fontSize="xl" textAlign="center" pt="3" pb="10">
        {json.date}
      </Text>
      <Stack direction="column" maxW="100%" spacing="10" pb="20">
        {json.body.map((item: any) => <div key={i++}>{parseItem(item)}</div>)}
      </Stack>
    </>
  )
}

const Page = ({ data }: { data: Blog }) => {
  return parseBlog(data);
}

export default Page;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { blog } = params;

  const data = await import(`blogs/${blog}.json`, { assert: { type: "json" } }).then((res) => res.default)

  return {
    props: {
      data
    }
  }

}

export const getStaticPaths: GetStaticPaths = async () => {

  const names = readdirSync("blogs/")
  const long = names.join('')
  const all_paths = long.matchAll(/(.*?)\.json/g)

  let list: string[] = []

  for (const match of all_paths) {
    list.push(match[1])
  }

  const paths = list.map((path: string) => { return { params: { blog: path } } })

  return {
    paths,
    fallback: false,
  }

}

