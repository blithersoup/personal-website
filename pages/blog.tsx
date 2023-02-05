import type { GetStaticProps } from "next"
import { Text, Heading, Stack, Box, Spacer, Card, Tag, CardHeader, CardFooter, CardBody, useCheckbox, CheckboxState, chakra, Flex, useCheckboxGroup, Checkbox } from "@chakra-ui/react"
import { FC } from "react"

export type item = {
  name: string,
  caption: string | null,
  body: string | item
}
export type blog = {
  name: string,
  date: string,
  tags: string[],
  id: number,
  body: item[],
  link: string
}

const BlogItem: FC<{ blog: blog }> = ({ blog }) => {
  return (
    <Card size="sm" variant="outline" _hover={{ shadow: "lg" }} as="a" href={`/blog/${blog.link}`}>
      <CardHeader>
        <Heading>
          {blog.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>
          {blog.name}
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


const BlogHomepage: FC<{ blogs: blog[] }> = ({ blogs }) => {
  let tags: Set<string> = new Set<string>()
  for (const blog of blogs) {
    blog.tags.forEach(tags.add, tags)
  }

  const tagList = Array.from(tags.values())

  const { value, getCheckboxProps } = useCheckboxGroup()


  return (
    <>
      <Stack direction="row" pt="7">
        <Spacer />
        <Heading size="2xl">
          Blog
        </Heading>
        <Spacer />
      </Stack>
      <Stack direction={["column-reverse", "row"]} pt="7" pl="5" pr="5">
        <Stack direction="column" w={["100%", "75%"]} spacing="5" pr="10">
          {blogs.filter((blog) =>
            value.every((checked) => blog.tags.includes(checked.toString()) )
          ).map((item: blog) => <BlogItem blog={item} key={item.id} />)}
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
  const blogs = await fetch(`${process.env.BASE_URL}/api/getBlogs`).then((res) => res.json())
  return {
    props: {
      blogs
    }
  }

}
