#!/usr/bin/env zx

import "zx/globals";

const { name } = fs.readJSONSync(__dirname + "/../package.json");

await $`pnpm build`;

cd("./docs/.vitepress/dist");

await $`pwd`;

// clean
await $`rm -rf .git`;
await $`git init`;
await $`git add -A`;
await $`git commit -m 'deploy!!'`;

// push to gh-page
await $`git push -f git@github.com:jungai/${name}.git master:gh-pages`;
