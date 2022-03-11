const config = require("./config.json");
const express = require('express')
const app = express()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: config.rbkey,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000)

rollbar.log('tesssssst');