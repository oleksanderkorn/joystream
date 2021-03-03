#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
# git init
git add -A
git commit -m 'Deploy to Github Pages'
git push # -f git@github.com:oleksanderkorn/joystream-era-stats.git main:gh-pages
cd -