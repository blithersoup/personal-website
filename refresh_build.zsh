#!/usr/bin/zsh
TIMEFMT="%*E s"

function buildparser {
  mkdir -p dist pages/blog;
  npm run --silent pegjs parser.pegjs;
  cat fragments/parserheader.txt parser.js fragments/parserfooter.txt > dist/parser.js;
  rm parser.js;
}

function writefile {
  NEWFILE=$(readlink -f ../pages/blog/${1%.txt}.tsx);
  FULLFILE=$(readlink -f $1);
  cat ../components/image.tsx ../fragments/blogheader.txt <(node ../dist/parser.js $FULLFILE) ../fragments/blogfooter.txt > $NEWFILE;
  OUT=$(npm run --silent prettier $NEWFILE);
  echo $OUT > $NEWFILE;
}

echo "Building parser==================="

echo -n "parser.js... "
time (buildparser)

echo "\nCreating pages===================="

cd blogs
for FILE in *; do
  echo -n "$FILE... "
  time (writefile $FILE)
done
cd ..
