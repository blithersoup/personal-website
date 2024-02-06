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

if [[ $1 == "--refresh-parser" ]]; then
  echo "Building parser==================="

  echo -n "parser.js... "
  time (buildparser)

else 
  cd blogs
  
  if [[ $1 == "" ]]; then
    echo "\nCreating pages===================="

    for FILE in *; do
      echo -n "$FILE... "
      time (writefile $FILE)
    done

  else
    echo -n "Refreshing $1.txt... "
    time (writefile $1.txt)

  fi
  cd ..

fi