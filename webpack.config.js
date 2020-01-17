const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')
const package = require('./package.json')

const isProduction =
  process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production'
const sourcePath = path.join(__dirname, './src')
const outputPath = path.join(__dirname, './build')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = () => {
  const env = dotenv.config().parsed

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
    context: sourcePath,
    entry: {
      app: './index.tsx',
    },
    output: {
      path: outputPath,
      filename: isProduction ? '[contenthash].js' : '[hash].js',
      chunkFilename: isProduction
        ? '[name].[contenthash].js'
        : '[name].[hash].js',
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      mainFields: ['module', 'browser', 'main'],
      alias: {
        app: path.resolve(__dirname, 'src/app/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            !isProduction && {
              loader: 'babel-loader',
            },
            'ts-loader',
          ].filter(Boolean),
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: !isProduction,
                importLoaders: 1,
                localIdentName: isProduction
                  ? '[hash:base64:5]'
                  : '[local]__[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import')({ addDependencyTo: webpack }),
                  require('postcss-url')(),
                  require('postcss-preset-env')({
                    stage: 2,
                  }),
                  require('postcss-reporter')(),
                  require('postcss-browser-reporter')({
                    disabled: isProduction,
                  }),
                ],
              },
            },
          ],
        },
        { test: /\.html$/, use: 'html-loader' },
        { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
        {
          test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
          use: 'file-loader',
        },
      ],
    },
    optimization: {
      splitChunks: {
        name: true,
        cacheGroups: {
          commons: {
            chunks: 'initial',
            minChunks: 2,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            filename: isProduction
              ? 'vendor.[contenthash].js'
              : 'vendor.[hash].js',
            priority: -10,
          },
        },
      },
      runtimeChunk: true,
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: false,
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[hash].css',
        disable: !isProduction,
      }),
      new HtmlWebpackPlugin({
        template: '../public/index.html',
        minify: {
          minifyJS: true,
          minifyCSS: true,
          removeComments: true,
          useShortDoctype: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
        },
        append: {
          head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`,
        },
        meta: {
          title: package.name,
          description: package.description,
          keywords: Array.isArray(package.keywords)
            ? package.keywords.join(',')
            : undefined,
        },
      }),
    ],
    devServer: {
      contentBase: sourcePath,
      hot: true,
      inline: true,
      historyApiFallback: {
        disableDotRule: true,
      },
      stats: 'minimal',
      clientLogLevel: 'warning',
    },
    devtool: isProduction
      ? 'hidden-source-map'
      : 'cheap-module-eval-source-map',
    node: {
      fs: 'empty',
      net: 'empty',
    },
  }
}
