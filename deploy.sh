#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add .
git commit -m 'Deploy to Github Pages'
git push -f git@github.com:oleksanderkorn/joystream.git master:gh-pages
cd ..