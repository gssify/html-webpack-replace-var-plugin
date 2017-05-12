# html-webpack-replace-var-plugin ![](https://badge.fury.io/js/html-webpack-replace-var-plugin.svg) ![issues](https://img.shields.io/github/issues/gssan/html-webpack-replace-var-plugin.svg) ![stars](https://img.shields.io/github/stars/gssan/html-webpack-replace-var-plugin.svg) ![MIT](https://img.shields.io/badge/license-MIT-blue.svg)
> Replace variables extension for the HTML Webpack Plugin

This is an extension plugin for the webpack plugin html-webpack-plugin - a plugin that can replace variables in server template

## Installation
Install the plugin with npm:

```bash
$ npm install html-webpack-replace-var-plugin
```

## Basic Usage

Require the plugin in your webpack config:

```js
var HtmlWebpackReplaceVarPlugin = require('html-webpack-replace-var-plugin');
```

Add the plugin to your webpack config as follows:

```js
plugins: [
  new HtmlWebpackPlugin(),
  new HtmlWebpackReplaceVarPlugin()
]
```

The above configuration will actually do nothing due to the configuration defaults.

you can set options like this:

```js
plugins: [
  new HtmlWebpackPlugin(),
  new HtmlWebpackReplaceVarPlugin({
    '<%': '{{',
    '%>': '}}'
  })
]
```
