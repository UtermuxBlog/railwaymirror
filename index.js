const express = require('express')
const { createProxyMiddleware }  = require('http-proxy-middleware')

const app = express()

app.all('/*', createProxyMiddleware({
  target: process.env.TARGET_URL,
  pathRewrite: { '^/': '', },
  secure: false
}))

app.listen(process.env.PORT)
