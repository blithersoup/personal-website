# Personal-Site

![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/blithersoup/personal-website)

Simple portfolio website made with Next.js in TypeScript.  Hosted at [gradyarnold.com](https://gradyarnold.com).


## Install

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

## Environment variables

`NEXT_PUBLIC_IMG_HOST`: Base URL of image host (must begin with `https://`), or name of directory within `/public` (starting with '/', ex. `/public/pics` should be `/pics`)


## A note on image loading

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

As I did not desire to specify or normalize my image sizes, I opted to use the `fill` prop on `next/image`.  I had some issues making this prop work, so used the legacy `<Image>` and passed props to Chakra ([link](https://stackoverflow.com/a/69596519)).

> [Source](https://nextjs.org/docs/basic-features/image-optimization)- \
> When using fill, the parent element must have position: relative \
> When using fill, the parent element must have display: block \


The best way I found do fix this issue is to to fill within a Chakra `<Box>`, which will resize to the screen first.  My current solution is simple and could definitely be improved upon, but is drastically more performant than most minor tweaks that I have found.  While easy, I thought I might share this in case anyone viewing this has the same issue.

