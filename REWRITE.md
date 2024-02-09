# Rewriting my website from scratch- Pt 1

In this article I aim to port my website from TypeScript JSX with Next.js and styled in Chakra UI to 
raw HTML and CSS with a custom implementation of all JavaScript libraries in C++ with WebAssembly. 
This would include style changes on mouse events, async image fetching and lazy loading, and routing.

## Background

### Why?

At some point a few months ago, I decided to benchmark this website for performance only to find some 
concerning realities.  First, I was not aware of how JavaScript loading worked...[]  Also, I found that 
Chakra UI is not structured to separate include statements, so the whole library is loaded on each page 
it is used (!!). (link).  As if that weren't bad enough, it also depends on the emotion runtime, which 
cannot be compiled to raw HTML and CSS with Next.js SSG.  While performance is not a primary concern 
in the modern web, this inefficiency bothers me[][].  Through this project, I also aim to learn more 
about HTML5 style[][] and CSS features, WebAssembly and browsers, and maybe some extra C++.

### State of previous code

#### Library structure



#### Page structure

#### Compilation

Compilation is done with the `refresh_build.zsh` script 

### Idea-- Before

## Design

## Implementation

### Template metaprogramming