# Bundler

Bundler to make developing code easier and scalable.

There is no weird code styles, because most of the configuration is as basic as it can be. A good example of this is by looking at the `.prettierrc.json` file.

## Table of contents

- [Bundler](#bundler)
  - [Table of contents](#table-of-contents)
  - [Why use a bundler](#why-use-a-bundler)
  - [Usage](#usage)
  - [Dev site](#dev-site)
  - [Choices](#choices)
    - [Rollup](#rollup)
    - [Typescript](#typescript)
    - [Eslint](#eslint)
    - [Prettier](#prettier)

## Why use a bundler

1. Scalable

   It is much easier to split the code up in files and components, and let the bundler combine/merge them into one file. Which makes it much more scalable.

2. No need for internet

   If someone uses Grafana on a different computer/server, and they are on the same network, they can still use the graphics used. _Same for closed networks_

   Since all the code is bundled together, the code don't need internet to use a module. E.g [svg.js](https://svgjs.com/docs/3.0/), [vue](https://vuejs.org/), custom created modules (like format-si.ts used in this example), ETC

3. Reusable

   By making it component based, it's a lot easier to create a central location, like github and npm, for all the components and update them independently. This will remove the part where you have to try and find the code in a different project, and you can instead look for the component you need in the central location.

## Usage

First you have to install the required dependencies

```bash
yarn install
```

Then you start the development script

```bash
yarn run dev
```

Go to <http://localhost:5000>. Change some code in `./src/on-init.ts`, `./src/on-render.ts`, and `./src/design/svg-data-inkscape.svg`, and the website will update.

When the code is ready to be uploaded to Grafana, start the build script

```bash
yarn run build
```

Then go to `/dist` and copy the contents of the files to the corresponding options in the panel. (custom-properties.json to customProperties, ETC)

## Dev site

`src/dev-site` is a folder where most of the configuration for the dev website is.

To add custom series go to `src/dev-site/data.ts` and add createSeries() in series.

Window has been used to get global variables like data, customProperties, ETC.

## Choices

### Rollup

[rollup.js](https://rollupjs.org/guide/en/)

[Rollup.js The why](https://rollupjs.org/guide/en/#the-why)

A good paragraph from ["Why I use Rollup, and not Webpack"](https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3)

Rollup also does something very different compared to the other bundlers. It only tries to achieve one simple goal: Bundle ES modules together and optimise the bundle. It doesn’t understand node module imports, it doesn’t know what to do with CSS, it certainly can’t understand images. Instead, rather than trying to implement what it thinks is the best way to bundle different type of assets, it leaves that entirely up to the developer to decide.

### Typescript

Good quote from [Typescript's website](https://www.typescriptlang.org/) "By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code."

Some good articles

- [How (and why) you should use TypeScript with Node and Express.](https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d)
- [The TypeScript Tax.](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)

### Eslint

[Eslint](https://eslint.org/) is a JavaScript linter that enables you to enforce a set of style, formatting, and coding standards for your codebase.

It works great with typescript through the [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

### Prettier

[Prettier](https://prettier.io/) is used to have standard code style.
