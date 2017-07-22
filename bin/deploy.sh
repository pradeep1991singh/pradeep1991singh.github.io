#!/usr/bin/env sh

# Run this script to deploy the app to Github Pages.

# Exit if any subcommand fails.
set -e

echo "Started deploying"

# Checkout gh-pages branch.
if [ `git branch | grep gh-pages` ]
then
  git branch -D gh-pages
fi
git checkout -b gh-pages

# Build site.
yarn install
gulp prod

# Delete and move files.
rm -R node_modules/
rm -R sass/

# Push to gh-pages.
git add -fA
git commit --allow-empty -m "$(git log -1 --pretty=%B) [ci skip]"
git push -f -q origin gh-pages

# Move back to previous branch.
git checkout -
yarn install

echo "Deployed Successfully!"
