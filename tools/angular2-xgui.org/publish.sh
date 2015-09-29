#!/bin/bash

# Script for updating angular2-xgui.org repo from current local build.

echo "###############################"
echo "## Update angular2-xgui.org ###"
echo "###############################"

ARG_DEFS=(
  "--action=(prepare|publish)"
  "--version-number=([0-9]+\.[0-9]+\.[0-9]+(-[a-z]+\.[0-9]+)?)"
)

function init {
  TMP_DIR=$(resolveDir ../../tmp)
  BUILD_DIR=$(resolveDir ../../dist/js/bundle)
  REPO_DIR=$TMP_DIR/angular2-xgui.org
  # TODO: replace with version read from the bundle dir.
  NEW_VERSION=$VERSION_NUMBER
  if [[ "$NEW_VERSION" =~ sha ]]; then
    IS_SNAPSHOT_BUILD=true
  else
    IS_SNAPSHOT_BUILD=
  fi
}

function prepare {

  echo "-- Cloning angular2-xgui.org"
  git clone git@github.com:01alchemist/angular2-xgui.org.git $REPO_DIR --depth=1

  echo "-- Updating angular2-xgui.org"

  if [[  $IS_SNAPSHOT_BUILD ]]; then
    #
    # update the snapshot folder
    #
    rm -rf $REPO_DIR/snapshot-angular2-xgui/
    mkdir $REPO_DIR/snapshot-angular2-xgui
    cp -r $BUILD_DIR/* $REPO_DIR/snapshot-angular2-xgui/
  else
    #
    # copy the files from the build
    #
    mkdir $REPO_DIR/$NEW_VERSION
    cp -r $BUILD_DIR/* $REPO_DIR/$NEW_VERSION/
  fi

  #
  # commit
  #
  echo "-- Committing angular2-xgui.org"
  cd $REPO_DIR
  git add -A
  git commit -m "v$NEW_VERSION"
}


function _update_code() {
  cd $REPO_DIR

  echo "-- Pushing angular2-xgui.org"
  git push origin master

  for backend in "$@" ; do
    echo "-- Refreshing angular2-xgui.org: backend=$backend"
    curl http://$backend:8003/gitFetchSite.php
  done
}

function publish {
  # The TXT record for backends.angularjs.org is a CSV of the IP addresses for
  # the currently serving Compute Engine backends.
  # angular2-xgui.org is served out of port 8003 on these backends.
  backends=("$(dig backends.angular2-xgui.org +short TXT | python -c 'print raw_input()[1:-1].replace(",", "\n")')")
  _update_code ${backends[@]}
}

source $(dirname $0)/../utils.inc
