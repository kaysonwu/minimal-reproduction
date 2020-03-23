const { resolve, join } = require('path');

// Path constants.
const root = resolve(__dirname, '..');
const src = join(root, 'src');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-react',
      ['@babel/preset-env', {
        modules: false,
        targets:  { ie: 9 },
      }],
    ],
    plugins: [
      "@loadable/babel-plugin",
    ]
  }
};

module.exports = {
  entry: {
    app: join(src, 'index.tsx'),
  },
  output: {
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
    '@': src,
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          'ts-loader'
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: babelLoader
      }
    ]
  },
}
