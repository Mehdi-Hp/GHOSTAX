import pkg from './package.json';

export default {
  input: './src/promise-observer.js',
  output: {
    moduleName: 'PromiseObserver',
    minify: true,
    format: [
      'cjs',
      'umd',
      'esm',
      'iife'
    ],
    dir: 'dist'
  },
  externals: [
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: {
    commonjs: true,
    'node-resolve': {
      browser: true,
      preferBuiltins: false
    }
  }
};
