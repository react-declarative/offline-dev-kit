#!/bin/bash
cd packages
for D in `find . -maxdepth 1 -not -path "." -not -path "./.*" -type d`
do
    cd $D
    node -e "const path = require('path'); const fs = require('fs'); const package = JSON.parse(fs.readFileSync('package.json').toString()); Object.keys(package.dependencies).forEach((name) => {try {package.dependencies[name] = JSON.parse(fs.readFileSync(path.join('node_modules', ...name.split('/'), 'package.json')).toString()).version; }catch{console.log(path.join('node_modules', ...name.split('/'), 'package.json'))}}); Object.keys(package.devDependencies).forEach((name) => {try {package.devDependencies[name] = JSON.parse(fs.readFileSync(path.join('node_modules', ...name.split('/'), 'package.json')).toString()).version; }catch{console.log(path.join('node_modules', ...name.split('/'), 'package.json'))}}); fs.writeFileSync('./package.json', JSON.stringify(package, null, 2))"
    cd ..
done
cd ..
