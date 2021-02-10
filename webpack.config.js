const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = (env = {}, { mode }) => {
  const prodExternals = {
    'react': true,
    'react-dom': true
  }

  const packageName = env.packageName || ''
  const folderName = env.folderName || ''
  const packagePath = path.resolve(__dirname, `packages/${folderName}/`)

  const entry = {
    index: mode === 'development' ? './src/index' : `./src/${packageName}`,
  }

  const babelLoader = {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', {
          useBuiltIns: 'entry',
          corejs: '3.8.3',
          targets: {
            browsers: [
                'IE 11',
            ],
          }
        }],
        '@babel/preset-react', // TODO: Enable automatic runtime support
        {
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                "helpers": false,
                "regenerator": true,
                useModules: false,
                "version": "7.12.5"
              }
            ],
          ]
        }
      ],
      plugins: [
        '@babel/plugin-transform-arrow-functions'
      ]
    },
  }

  const configObj = {
    mode,
    entry,
    devtool: mode === 'development' ? 'inline-source-map' : false,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    stats: mode === 'development' ? 'normal' : 'minimal',
    output: {
        path: packagePath + `/dist`,
        filename: () => `${packageName.toLowerCase()}.js`,
        libraryTarget: 'umd',
    },
    resolve: {
      extensions: ['*', '.tsx', '.ts', '.js'],
    },
    target: 'web',
    module: {
      rules: [
        {
          // JS, JSX - Transpiles JSX
          test: /\.m?jsx?$/,
          use: babelLoader
        },
        {
          // TS, TSX - Transpiles TypeScript and JSX. The ts-loader package handles both and specific configuration is set in tsconfig.json at root.
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          // SASS
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        },
        {
          // JPG, PNG, GIF - Small images will be inlined and encoded but larger ones will be imported normally.
          // For output that gets imported as a library, there's currently no good solution for larger images that don't involve the user of the library manually importing them.
          // https://github.com/webpack/webpack/issues/7353
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'images/[name].[ext]'
              }
            },
          ],
        },
        {
          // SVG
          test: /\.svg$/i,
          oneOf: [
            // When referenced in CSS, they are inlined and encoded with the url-loader package.
            {
              issuer: /\.s[ac]ss$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    generator: (content) => svgToMiniDataURI(content.toString()),
                  },
                },
              ]
            },
            // If you want to import into a JS/TS file as an encoded string for use inside of a <img /> element, append ?inline to the import.
            // Example: import icon from './icon.svg?inline'
            {
              resourceQuery: /inline/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    generator: (content) => svgToMiniDataURI(content.toString()),
                  },
                },
              ]
            },
            // When imported into a JS/TS file, they are imported as React Components exposing the full markup of the SVG.
            {
              use: [
                babelLoader,
                {
                  loader: 'react-svg-loader'
                }
              ]
            }
          ]
        },
      ]
    }
  }

  // Only export as a library when building for production.
  if(mode !== 'development') {
    configObj.externals = prodExternals
    configObj.output = {
      ...configObj.output,
      library: {
        type: 'umd',
        name: packageName
      }
    }
  }

  // We only need to generate an index.html file during development for testing purposes.
  if(mode === 'development') {
    configObj.devServer = {
      open: true,
      compress: true,
      overlay: {
        warnings: false,
        errors: true
      }
    };
    configObj.plugins = [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  }

  return configObj
}