const express = require('express')
const { createProxyMiddleware }  = require('http-proxy-middleware')

const app = express()

app.all('/*', createProxyMiddleware({
  target: "https://mirrors.utermux.dev/",
  pathRewrite: { '^/': '', },
  secure: false,
  "changeOrigin": true,
}))

app.listen(443)
