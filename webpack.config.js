
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const workboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pkg = require('./package.json');
const { isProd, envs } = require('./scripts/envs.js');

const PAGES = [
  'color', 
  'grid', 
  'iconography', 
  'spacing', 
  'typography'
];

const pages = PAGES.map(page => new HtmlWebpackPlugin({
  title: pkg.displayName,
  template: `./src/${page}/index.html`,
  filename: `${page}/index.html`
}));

const entry = str => Object.assign({}, { [str]: `./src/${str}/index.scss` });
const entries = PAGES
  .map(e => entry(e))
  .concat([{ '/': './src/index.scss' }])
  .reduce((prev, curr) => Object.assign(prev, curr));

const getCSS = () => isProd() ? 
  MiniCssExtractPlugin.loader : 'style-loader';

const CONFIG = {
  entry: isProd() ? entries : {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  mode: isProd() ? envs.production : envs.development ,
  devtool: 'source-map',

  plugins: [
    new FaviconsWebpackPlugin('./src/_assets/logo.png'),

    new MiniCssExtractPlugin({
      filename: "[name]/index.css",
      chunkFilename: "[id].css"
    }),

    new WebpackPwaManifest({
      name: pkg.name,
      short_name: pkg.displayName,
      description: pkg.description,
      background_color: '#ffffff',
      theme_color: pkg.config.themeColor,
      start_url: '',
      icons: [
        {
          src: path.resolve('src/_assets/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        }
      ]
    }),

    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: [
        "**/*.{jpg,js,png,ico,json,html,css}"
      ],
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          getCSS(), 
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          getCSS(),
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
}

CONFIG.plugins = CONFIG.plugins.concat(pages, [
  new HtmlWebpackPlugin({
    title: pkg.displayName,
    description: pkg.description,
    color: pkg.config.themeColor,
    template: './src/_assets/index.html'
  })
]);

module.exports = CONFIG;