const { environment } = require('@rails/webpacker')
// console.log(environment);
module.exports = environment
// module.exports = () => {
//   return {
//     ...environment,
//     // presets: [
//     //   [
//     //     '@babel/preset-react',
//     //     {
//     //       development: isDevelopmentEnv || isTestEnv,
//     //       useBuiltIns: true,
//     //     },
//     //   ],
//     // ].filter(Boolean),
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         options: { presets: ['@babel/env','@babel/preset-react'] },
//       },
//     ]
//     // extends: './node_modules/@rails/webpacker/package/babel/preset.js',
//   }
// } 