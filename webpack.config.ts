import { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export default config;
