#!/bin/bash
uglifyjs $(find client/ -name "*.js") > dist/app.js