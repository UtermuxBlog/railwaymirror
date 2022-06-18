const express = require('express');
const timeout = require('connect-timeout');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();


const HOST = 'https://mirrors.utermux.dev', PORT = '80';


const TIME_OUT = 30 * 1e3;


app.set('port', PORT);


app.use(timeout(TIME_OUT));
app.use((req, res, next) => {
  if (!req.timedout) next();
});


app.use('/', express.static('static'));


app.use(createProxyMiddleware('/', {
  target: HOST, 
  changeOrigin: true, 
  ws: false
}));


app.listen(app.get('port'), () => {
  console.log(`server running ${PORT }`);
});
