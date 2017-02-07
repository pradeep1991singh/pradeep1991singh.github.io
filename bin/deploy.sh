#!/usr/bin/env sh

# run this script to deploy the site to gh-pages branch

# exit if any subcommand fails
set -e

echo "Started deploying..."

# checkout gh-pages branch
git checkout gh-pages

# build site
npm install
gulp deploy

# push to gh-pages branch
git add -fA
git commit --allow-empty -m "$(git log -1 --pretty=%B) [ci skip]"
git push -f -q origin gh-pages

# move back to previous branch
git checkout -
bower install

echo "deployed successfully!"