var S3Plugin = require('webpack-s3-plugin');


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new S3Plugin({
      // Only upload bundle.js 
      include: /.*\.(bundle.js)/,
      // s3Options are required 
      s3Options: {
        accessKeyId: 'AKIAILAVEIMUHPP7EY4A' , //process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: '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', //process.env.AWS_SECRET_ACCESS_KEY,
      },
      s3UploadOptions: {
        Bucket: 'MyBucket'  
      }
    })
  ]
};
