//@ts-nocheck
import { chakra, Stack, Center, Heading, Text, Link, Box } from "@chakra-ui/react"
import NextImage from "next/legacy/image";
import Head from "next/head";

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "alt",
      "objectFit",
      "layout"
    ].includes(prop),
});
