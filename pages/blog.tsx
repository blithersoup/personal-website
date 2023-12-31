import type { GetStaticProps } from "next"
import { Text, Heading, Stack, Spacer, Card, Tag, CardHeader, CardFooter, CardBody, useCheckboxGroup, Checkbox } from "@chakra-ui/react"
import { readFileSync, readdirSync } from "fs"
import { FC } from "react"

export type Item = {
  name: string,
  caption: string | null,
  body: any,
  type: string
}
export type Blog = {
  name: string,
  date: string,
  tags: string[],
  id: number,
  body: Item[],
  link: string
}

const BlogItem: FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <Card size="sm" variant="outline" _hover={{ shadow: "lg" }} as="a" href={`/blog/${blog.link}`}>
      <CardHeader>
        <Heading>
          {blog.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          {blog.date}
        </Text>
      </CardBody>
      <CardFooter>

        <Stack direction="row" spacing="2">
          {blog.tags.map((tag) => <Tag _hover={{ shadow: "md" }} key={tag}>{tag}</Tag>)}
        </Stack>
      </CardFooter>
    </Card>
  )
}


const BlogHomepage: FC<{ blogs: Blog[] }> = ({ blogs }) => {
  let tags: Set<string> = new Set<string>()
  for (const blog of blogs) {
    blog.tags.forEach(tags.add, tags)
  }

  const tagList = Array.from(tags.values())

  const { value, getCheckboxProps } = useCheckboxGroup()


  return (
    <>
      <meta name="description" content="Here is my blog" />
      <title>Blog</title>
      <meta name="theme-color" content="#228B22" />
      <Stack direction="row" pt="7" pb="5">
        <Spacer />
        <Heading size="2xl">
          Blog
        </Heading>
        <Spacer />
      </Stack>
      <Stack direction={["column-reverse", "row"]} pt="7" pl="5" pr="5" pb="10" spacing="7">
        <Stack direction="column" w={["100%", "75%"]} spacing="5">
          {blogs.filter((blog) =>
            value.every((checked) => blog.tags.includes(checked.toString()))
          ).map((item: Blog) => <BlogItem blog={item} key={item.id} />)}
        </Stack>
        <Card size="md">
          <CardHeader>
            <Heading>
              Filter by tags
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack direction="column" spacing="3">
              {tagList.map((tag) => <Checkbox {...getCheckboxProps({ value: tag })} key={tag}>{tag}</Checkbox>)}
            </Stack>
          </CardBody>

        </Card>
      </Stack>
    </>
  )
}

export default BlogHomepage


export const getStaticProps: GetStaticProps = async () => {
  const dir = readdirSync("blogs/")
  let blogs: any = []

  for (const name of dir) {
    
    const text: string = readFileSync(`blogs/${name}`).toString()
    const style = JSON.parse(text.match("\{[^}]+\}")[0])
    blogs.push(style);
  }

  blogs.sort((a: any, b: any) => { return b.id - a.id })

  return {
    props: {
      blogs
    }
  }

}
