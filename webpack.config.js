export default {
    mode: 'development',
    entry:'./src/index.html',
    output:{
      filename: 'bundle.js',
  },
  devServer:{

    static: {
     directory: 'dist',
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [{ 
        test: /.js$|jsx?$/,
        use: ['babel-loader']
    }],
  },
}