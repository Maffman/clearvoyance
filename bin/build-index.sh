#!/bin/bash
jade -O bin/index.jade.json < client/index.jade | html-minifier -c bin/html-minifier.json > dist/index.html