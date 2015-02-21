var a = JSON.stringify(require('./a.json'))
  , b = JSON.stringify(require('./b.json'))
  , assert = require('assert')

assert.equal(a, b)
