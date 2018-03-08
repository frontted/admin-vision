#!/bin/bash
MODE=${1:-production}

# modes: development, production (default), watch
# ie.
# ./build.sh development
# ./build.sh production
# ./build.sh watch

node_modules/.bin/concurrently -r \
"npm run $MODE" \
"npm run $MODE -- --env.run sass --env.theme blue" \
"npm run $MODE -- --env.run sass --env.theme green"