#!/bin/bash

# Script for removing specified release dir from angular2-xgui.org.

echo "##############################################"
echo "## Remove a version from angular2-xgui.org ###"
echo "##############################################"

ARG_DEFS=(
  "--action=(prepare|publish)"
  "--version-number=([0-9]+\.[0-9]+\.[0-9]+(-[a-z]+\.[0-9]+)?)"
)

function init {
  TMP_DIR=$(resolveDir ../../tmp)
  REPO_DIR=$TMP_DIR/angular2-xgui.org
  echo "code tmp $TMP_DIR"
}

function prepare {
  echo "-- Cloning angular2-xgui.org"
  git clone git@github.com:01alchemist/angular2-xgui.org.git $REPO_DIR

  #
  # Remove the files from the repo
  #
  echo "-- Removing $VERSION_NUMBER from angular2-xgui.org"
  cd $REPO_DIR
  if [ -d "$VERSION_NUMBER" ]; then
    git rm -r $VERSION_NUMBER
    echo "-- Committing removal to angular2-xgui.org"
    git commit -m "removing v$VERSION_NUMBER"
  else
    echo "-- Version: $VERSION_NUMBER does not exist in angular2-xgui.org!"
  fi
}

function publish {
  cd $REPO_DIR

  echo "-- Pushing angular2-xgui.org to github"
  git push origin master
}

source $(dirname $0)/../utils.inc
