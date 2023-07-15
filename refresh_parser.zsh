#!/usr/bin/zsh
pegjs parser.pegjs
cat components/image.tsx parser.js > temp.js
echo "\nexport { peg\$parse as parse };" >> temp.js
mv temp.js components/parser.tsx; rm parser.js