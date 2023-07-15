import { chakra, Stack, Center, Heading, Text, Link, Box } from "@chakra-ui/react"
import NextImage from "next/legacy/image";
import shortid from "shortid"

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "alt",
      "objectFit",
      "layout"
    ].includes(prop),
});
