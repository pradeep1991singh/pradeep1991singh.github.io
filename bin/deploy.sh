#!/usr/bin/env sh

# Run this script to deploy the app to Github Pages.

# Exit if any subcommand fails.
set -e

echo "Started deploying"

# Checkout master branch.
if [ `git branch | grep master` ]
then
  git branch -D master
fi
git checkout -b master

# Build site.
yarn install
gulp prod

# Delete and move files.
rm -R node_modules/ sass/ bin/ .gitignore gulpfile.js package.json README.md yarn.lock CNAME

# Push to master.
git add -fA
git commit --allow-empty -m "$(git log -1 --pretty=%B) [ci skip]"
git push -f -q origin master

# Move back to previous branch.
git checkout -
yarn install

echo "Deployed Successfully!"
