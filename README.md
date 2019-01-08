> ## 🛠 Status: In Development

# amber-visual
Styleguide & visual assets for the Amber Design System.

[![Build Status](https://travis-ci.org/bitrockteam/amber-visual.svg?branch=master)](https://travis-ci.org/bitrockteam/amber-visual) [![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
![https://david-dm.org/bitrockteam/amber-visual.svg](https://david-dm.org/bitrockteam/amber-visual.svg)

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

### Available NPM tasks
Start the project in development mode (live reload)
```bash
$ yarn start
```

Create a static build in the `./dist` folder
```bash
$ yarn build
```

### License
Developed by Bitrock UI Engineering team, released under the [MIT license](LICENSE).
