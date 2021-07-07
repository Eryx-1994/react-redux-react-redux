
//verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');
console.log('aa',createProxyMiddleware)
// module.exports = function (app) {
//     console.log(app,"app")
//     app.use('/api', createProxyMiddleware({
//         target: 'http://localhost:4000',
//         changeOrigin: true,
//         pathRewrite: { //路径替换
//             '^/api': '', // axios 访问/api2 == target + /api
//         },
//         // "secure":true 	//如果访问的是https类的链接，就需要设置为true
//     }));
// };