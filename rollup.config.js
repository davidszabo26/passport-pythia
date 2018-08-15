const path = require('path');
const typescript = require('rollup-plugin-typescript2');

const packageJson = require('./package.json');

const format = process.env.FORMAT;

const formats = {
  cjs: 'cjs',
  es: 'es',
};

if (!formats[format]) {
  throw new TypeError(`'${format}' is not a valid module format.`);
}

module.exports = {
  input: path.join(__dirname, "src", "index.ts"),
  output: {
    format,
    file: `${packageJson.name}.${format}.js`,
    dir: path.join(__dirname, "dist")
  },
  plugins: [
    typescript({
      exclude: '**/*.test.ts',
      useTsconfigDeclarationDir: true
    })
  ]
};