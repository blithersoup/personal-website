import { readFileSync, readdirSync } from "fs";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { parse } from "../../components/parser"


const Page = ({ text }: { text: string }) => {
  const { style, blog } = parse(text)

  return (
    <>
      <Head>
        <title>{style.name}</title>
        <meta name="description" content={style.name} />
        <meta name="theme-color" content="#228B22" />
      </Head>
      <>
        {blog}
      </>
    </>
  )
}

export default Page;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { blog } = params;
  const text: string = readFileSync(`blogs/${blog}.txt`).toString()

  return {
    props: {
      text
    }
  }

}

export const getStaticPaths: GetStaticPaths = async () => {

  const names = readdirSync("blogs/")
  const long = names.join('')
  const all_paths = long.matchAll(/(.*?)\.txt/g)

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

