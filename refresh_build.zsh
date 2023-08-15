#!/usr/bin/zsh

mkdir -p dist pages/blog
pegjs parser.pegjs
cat fragments/parserheader.txt parser.js fragments/parserfooter.txt > dist/parser.js
rm parser.js

cd blogs
for FILE in ./*; do
  NEWFILE=../pages/blog/${FILE%.txt}.tsx
  FULLFILE=$(readlink -f $FILE)
  cat ../components/image.tsx ../fragments/blogheader.txt <(node ../dist/parser.js $FULLFILE) ../fragments/blogfooter.txt > $NEWFILE
  prettier $NEWFILE -w
done

cd ..
