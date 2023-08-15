# Personal-Site

![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/blithersoup/personal-website)

Simple portfolio website made with Next.js in TypeScript.  Hosted at [gradyarnold.com](https://gradyarnold.com).

## About 

### Blog parsing- code generation

The project uses a PEG parser with pegjs to generate code from text.

#### Parser expression hierarchy

* Blog
  * Meta
  * Document
    * Row (Block+)
    * Block
      * Image
      * Heading
      * Paragraph
        * Line
          * Link
          * Bold
          * Italic
          * Code
          * Text

Expressions are parsed in this order, with lines not meeting the patterns for an expression passing through to the 
next definition.

#### Language

Terms- capitalized: expression name, arrows: Chakra jsx tag

The language requires a `Meta` section. which sets an object equal to json that is described in the document.  Then, 
the blog itself consists of a list of expressions that are formed as a `<Stack>`.  From there, a `Row` is formatted 
as a `<Stack>` with variable direction.

Any item in a `Row` must be a `Block`, as are items in the `Document` that are not a `Row`.  A block must then be an 
`Image`, `Heading`, or `Paragraph`.

A `Paragraph` is a list of `Line`s, which can be a `Link`, `Bold`, `Italic`, or `Code`.  If none of these apply, the 
item is a `Text`.  These items can be placed with an extra newline between them to separate them vertically, or with 
no extra newline to nest items.  This only works, however, for items in the `Line` heirarchy.  All other items must 
be separated by an extra newline.  Also, there must be two extra newlines at the end of the file, or exactly one blank 
line.

#### Page generation

Page generation is done by `refresh_build.zsh`.  This script regenerates the parser and then generates each page. 
The parser is concatenated with a header and footer in order to run the parser with node.js with argv and stdout 
as a part of the command.  For each page, the parser generates the page content, which is also concatenated with 
a header and footer.  After that, the pages are reformatted with Prettier.

#### Landing page generation

This works similarly to the old method, but pulls the object from the beginning of each blog page instead of the 
entire page.

### Homepage graphic

I made the homepage graphic using an SVG I [generated](https://danmarshall.github.io/google-font-to-svg-path/) 
from text and using it in an AnimeJS animation.  For using it within the page, I set it within a `useRef` hook 
with a type within it to account for undefined behavior on load.  I found this to be better than `useState`, but 
I am not sure what is the best to use here.  The animation also resets `onClick`.

### A note on image loading

In my `parseItem` function, I wrote the below code to load images:

```typescript
<Box boxSize="md" position="relative" display="block">
  <Image src={`${process.env.NEXT_PUBLIC_IMG_HOST}/${item.body}`}
    alt="Loading image"
    objectFit="cover"
    {...{ layout: "fill" }}
  />
  <Text fontSize="md">
    {item.caption}
  </Text>
</Box>
```

As I did not desire to specify or normalize my image sizes, I opted to use the `fill` prop on `next/image`.  
I had some issues making this prop work, so used the legacy `<Image>` and passed props to 
Chakra ([link](https://stackoverflow.com/a/69596519)).

> [Source](https://nextjs.org/docs/basic-features/image-optimization)- \
> When using fill, the parent element must have position: relative \
> When using fill, the parent element must have display: block 


The best way I found do fix this issue is to to fill within a Chakra `<Box>`, which will resize to the screen 
first.  My current solution is simple and could definitely be improved upon, but is drastically more performant 
than most minor tweaks that I have found.  While easy, I thought I might share this in case anyone viewing this 
has the same issue.

### Blog generation- old method

I wrote the blog generation from scratch; below is an overview of how it works.

#### Blog parsing

The JSON itself is of the format 

```typescript
{
  name: string,
  date: string,
  tags: list[string],
  id: number,
  link: string,
  body: list[item]
}
```

For each page, the main tsx is returned from the parseBlog function, which calls parseItem for each item.  
parseItem is a switch statement that can return either tsx or map more parseItem results inside a `<Stack>`.  
I also used `direction={["column", "row"]}` to make rows vertical on mobile.

#### Using `getStaticPaths` and `getStaticProps`

In `blog/[blog].tsx`, the names of all blogs are returned via `readdirSync` and then formatted into a list 
of all paths.  This function is only called at build time, so an async call is not necessary for performance.  
`getStaticProps` then imports the json and passes it in as a prop.

For the blog homepage, the same process occurs with props but with more processing for the list.  I also 
implemented a filter by tags feature with

```typescript
{blogs.filter((blog) =>
  value.every((checked) => blog.tags.includes(checked.toString()))
```

## To use

### Install

```bash
npm i
```

To start-

```
# development
npm run dev
```

```bash
# production
npm run build
npm run start
```

Build-

```bash
# from top level of repository
zsh refresh_build.zsh
```

Requires- prettierjs, pegjs executables

### Environment variables

`NEXT_PUBLIC_IMG_HOST`: Base URL of image host (must begin with `https://`), or name of directory 
within `/public` (starting with '/', ex. `/public/pics` should be `/pics`)