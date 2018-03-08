require('theme-mix')

// Enable sourcemaps
const { mix } = require('laravel-mix')

const sourceMapsInProduction = false

mix.sourceMaps(sourceMapsInProduction)

if (mix.inProduction()) {
  // FIX PRODUCTION JS COMPILATION
  const merge   = require('webpack-merge').smart
  let webpackConfig = {}

  webpackConfig = merge(webpackConfig, {
      module: {
        rules: [{
          test: /\.js?$/,
          exclude: /node_modules(?!\/@material)|bower_components/,
          use: [{
              loader: 'babel-loader',
              options: mix.config.babel()
          }]
        }]
      }
    })
  webpackConfig = merge(Config.webpackConfig, webpackConfig)
  mix.webpackConfig(webpackConfig)
}