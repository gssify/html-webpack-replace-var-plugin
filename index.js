function HtmlWebpackReplaceVarPlugin (options) {
  this.options = options || {}
}

HtmlWebpackReplaceVarPlugin.prototype.apply = function (compiler) {
  var options = this.options
  var keys = Object.keys(options)
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-html-processing', function(htmlPluginData, callback) {
      keys.forEach(function (key) {
        htmlPluginData.html = htmlPluginData.html.replace(key, options[key]);
      })
      callback(null, htmlPluginData);
    });
  });
}

module.exports = HtmlWebpackReplaceVarPlugin
