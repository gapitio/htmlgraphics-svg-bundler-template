# Bundler

Bundler to make developing code easier and scalable.

There is no weird code styles, because most of the configuration is as basic as it can be. A good example of this is by looking at the `.prettierrc.json` file.

## Table of contents

- [Bundler](#bundler)
  - [Table of contents](#table-of-contents)
  - [Contains](#contains)
  - [Usage](#usage)
  - [Dev site](#dev-site)

## Contains

- [rollup.js](https://rollupjs.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [SVGO](https://github.com/svg/svgo)
- Local development server to run the code live in the browser.

## Usage

First you have to install the required dependencies

```bash
npm install
```

Then you start the development script

```bash
npm run dev
```

Go to <http://localhost:5000>. Change some code in `./src/on-init.ts`, `./src/on-render.ts`, and `./src/design/svg-data-inkscape.svg`, and the website will update.

When the code is ready to be uploaded to Grafana, start the build script

```bash
npm run build
```

Then go to `/dist` and copy the content of `panel-options.json` to the panels `Import/export` option.

## Dev site

`src/dev-site` is a folder where most of the configuration for the dev website is.

To add custom series go to `src/dev-site/data.ts` and add createSeries() in series.

Window has been used to get global variables like data, customProperties, ETC.
