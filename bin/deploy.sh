#!/usr/bin/env sh

# run this script to deploy the site to gh-pages branch

# exit if any subcommand fails
set -e

echo "Started deploying..."

# checkout gh-pages branch
git checkout master
git merge new-design

# build site
npm i
gulp prod

# delete not required files
rm -rf bin sass gulpfile.js packgage.json

# push to gh-pages branch
git add -fA
git commit --allow-empty -m "$(git log -1 --pretty=%B)"
git push

# move back to previous branch
git checkout -
npm i

echo "deployed successfully!"
