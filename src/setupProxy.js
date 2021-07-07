
//verion > 1.0
const { createProxyMiddleware } = require('http-proxy-middleware');
const { url1 } = require('../src/utils/baseUrl.js')
module.exports = function (app) {
    app.use('/api', createProxyMiddleware({
        target: url1,
        changeOrigin: true,
        pathRewrite: { //路径替换
            '^/api': '/api', // axios 访问/api2 == target + /api
        },
        // "secure":true 	//如果访问的是https类的链接，就需要设置为true
    }));
};