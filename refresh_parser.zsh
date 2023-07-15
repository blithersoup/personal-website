#!/usr/bin/zsh
pegjs parser.pegjs
cat components/image.tsx parser.js > temp.js
mv temp.js components/parser.jsx; rm parser.js