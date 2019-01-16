# amber-visual
[![Build Status](https://travis-ci.org/bitrockteam/amber-visual.svg?branch=master)](https://travis-ci.org/bitrockteam/amber-visual) 
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)![https://david-dm.org/bitrockteam/amber-visual.svg](https://david-dm.org/bitrockteam/amber-visual.svg)

Styleguide & visual assets for the Amber Design System.

![logo.svg](logo.svg)

This repository is aimed mainly to developers and contributors, for the proper documentation & styleguide please refer to [https://amber.bitrock.it](https://amber.bitrock.it).

## Usage 

### Install
```bash
$ yarn add @amber-ds/visual
--- or ---
$ npm install @amber-ds/visual
```

### Add in project
Compiled `.css`, no tooling:
```html
<link rel="stylesheet" href="./node_modules/@amber-ds/visual/dist/index.css">
```

<!-- Compiled CSS
```css
@import "./node_modules/@amber-ds/visual/dist/index.css";
``` -->

Importing source `.scss` within a `.scss` file with Webpack:
```css
@import "~@amber-ds/visual";
```

Importing source `.scss` within a `.js` file with Webpack:
```javascript
import '@amber-ds/visual';
```

## Development

### Getting started
Clone the repo
```bash
$ git clone git@github.com:bitrockteam/amber-visual.git && cd amber-visual
```

Install dependencies
```bash
$ yarn
--- or ---
$ npm install
```

### Available NPM tasks
Start the project in development mode (live reload)
```bash
$ yarn start
```

Create a static build in the `./dist` folder
```bash
$ yarn build
```

## How to contribute
Please refer to our [contributing](./contributing.md) document.

## License
Developed by Bitrock UI Engineering team, released under the [MIT license](LICENSE).
