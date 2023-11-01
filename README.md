# Bundler

Bundler to make developing code easier and scalable.

## Contains

- [rollup.js](https://rollupjs.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [SVGO](https://github.com/svg/svgo)
- Local development server to run the code live in the browser.
- A watcher which pushes changes to Grafana.

## Prerequisite

- [node](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Usage

First you have to install the required dependencies

```bash
pnpm install
```

Then you start the development script

```bash
pnpm run dev
```

Go to <http://localhost:5173>. Change some code in `./src/onInit.ts`, `./src/onRender.ts`, and `./src/design/svgData.svg`, and the website will update.

When the code is ready to be uploaded to Grafana, start the build script

```bash
pnpm run build
```

Then go to `/dist` and copy the content of `panel-options.json` to the panels `Import/export` option.

## Dev site

`src/devSite` is a folder where most of the configuration for the dev website is.

To add custom series go to `src/devSite/data.ts` and add createSeries() in series.

Window has been used to get global variables like data, customProperties, ETC.

## Eslint

It's recommended to use the current eslint config, but as it's strongly opinionated it might be _easier_ to use a less opinionated config.

Replace the current .eslint.cjs with the below code.

```ts
module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
```

## Watcher

The watcher pushes any changes directly to [Grafana](https://github.com/grafana/grafana).

Create a `.env` file at the top level (in the same folder as this and package.json is) with the below contents.

```env
GRAFANA_URL=
GRAFANA_ORG_ID=
GRAFANA_TOKEN=
GRAFANA_FOLDER_UID=
```

Example configuration:

```env
GRAFANA_URL=http://localhost:3100
GRAFANA_ORG_ID="1"
GRAFANA_TOKEN="glsa_BXohudtWX0kgqXaXe0mDDUzOndfsIdxz_1b6fd716"
GRAFANA_FOLDER_UID=l3KqBxCMz
```

- (new) To create service account and add a token to a service account follow this guide from Grafana [Service accounts](https://grafana.com/docs/grafana/latest/administration/service-accounts/).
- (old) To create a token follow this guide from Grafana [API Keys](https://grafana.com/docs/grafana/latest/administration/api-keys/).

Change the uid/title in the `panel.json` file.

Run

```bash
pnpm run watch
```
