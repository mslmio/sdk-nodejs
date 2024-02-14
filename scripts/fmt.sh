#!/bin/bash

# Assume the script is located in the 'scripts' directory.
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$SCRIPT_DIR/.."

# Format code in project.

# Add more directories as needed.
find \
    $ROOT_DIR/packages \
    $ROOT_DIR/jest.config.js \
    $ROOT_DIR/package.json \
    $ROOT_DIR/tsconfig.json \
    -not \( -path $ROOT_DIR/node_modules -prune \) \
    -name '*.js' -print0 \
    -or -name '*.ts' -print0 \
    -or -name '*.css' -print0 \
    -or -name '*.scss' -print0 \
    -or -name '*.html' -print0 \
    -or -name '*.json' -print0 \
    | xargs -0 $ROOT_DIR/node_modules/.bin/prettier \
        --config $ROOT_DIR/.prettierrc.js \
        --write
