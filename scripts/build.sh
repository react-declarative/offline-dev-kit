#!/bin/bash
cd packages
for D in `find . -maxdepth 1 -not -path "." -not -path "./.*" -type d`
do
    cd $D
    rm -rf node_modules
    npm install
    npm run build
    cd ..
done
cd ..
