> ## 🛠 Status: In Development

# amber-visual
Styleguide & visual assets for the Amber Design System.

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

<!-- Run the tests
```bash
$ yarn test
```

Run the build action and deploy to GitHub pages 
```bash
$ yarn deploy
``` -->


### License
Developed by Bitrock UI Engineering team, released under the [MIT license](LICENSE).
