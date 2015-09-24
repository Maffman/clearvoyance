#!/bin/bash
if [ -d dist ]
then
  cd dist &&
  find . -name "*.html" ! -wholename "./index.html" -delete
  find . -type d -empty -delete
else
  mkdir dist
fi