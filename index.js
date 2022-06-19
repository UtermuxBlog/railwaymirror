const express = require('express')
const { createProxyMiddleware }  = require('http-proxy-middleware')

const app = express()

app.all('/*', createProxyMiddleware({
  target: process.env.TARGET_URL,
  pathRewrite: { '^/': '', },
  secure: false,
  "changeOrigin": true,
}))

app.listen(443)
