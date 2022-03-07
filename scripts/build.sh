#!/bin/bash
cd packages
for D in `find . -maxdepth 1 -not -path "." -not -path "./.*" -type d`
do
    cd $D
    npm run build
    cd ..
done
cd ..
