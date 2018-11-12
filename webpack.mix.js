require('theme-mix')

// Enable sourcemaps
const { mix } = require('laravel-mix')
const sourceMapsInProduction = false
mix.sourceMaps(sourceMapsInProduction)

// https://github.com/JeffreyWay/laravel-mix/issues/1793
if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'inline-source-map'
  })
}