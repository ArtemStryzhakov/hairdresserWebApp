const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
	app.use('/api', createProxyMiddleware({target: 'http://185.243.215.18:9000', changeOrigin: true}));
};
