#!/bin/bash
cd client &&
for filepath in $(find . -name "*.html")
do
  mkdir -p ../dist/$(dirname $filepath) &&
  html-minifier -c ../bin/html-minifier.json $filepath > ../dist/$filepath &
done