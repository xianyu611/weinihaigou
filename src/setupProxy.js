const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        	'/api',
        	createProxyMiddleware({ 
        	target: 'http://www.weinihaigou.com', 
        	changeOrigin: true ,
            pathRewrite:{
                "^/api":"/"
            }
        }))
 }