#!/usr/bin/env sh
set -e
npm run build
cd dist
git add .
git commit -m 'Deploy to Github Pages'
git push
cd ..