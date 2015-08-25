const jsdom = require('jsdom').jsdom
const test = require('tape')
const fs = require('fs')

const validator = require('../')

test('should assert input types', function (t) {
  t.plan(2)
  t.throws(validator, /object/)
  t.doesNotThrow(validator.bind(null, {}), /object/)
})

test('should return a function', function (t) {
  t.plan(1)
  const validate = validator({})
  t.equal(typeof validate, 'function')
})

test('should return a body if valid', function (t) {
  t.plan(4)
  const html = fs.readFileSync(__dirname + '/valid.html')
  const document = jsdom(html)

  const validate = validator({
    required: true,
    type: 'object',
    properties: {
      username: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      }
    }
  })

  const form = document.querySelector('form')
  validate(form, {}, function (err, data) {
    t.error(err)
    t.equal(typeof data, 'object')
    t.equal(data.username, 'timothy')
    t.equal(data.password, 'foobarbaz')
  })
})

test('should return an error if invalid', function (t) {
  t.plan(5)
  const html = fs.readFileSync(__dirname + '/invalid.html')
  const document = jsdom(html)

  const validate = validator({
    required: true,
    type: 'object',
    properties: {
      username: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      }
    }
  })

  const form = document.querySelector('form')
  validate(form, function (err, data) {
    t.ok(Array.isArray(err), 'err is array')
    t.notOk(data, 'body not sent')
    t.equal(err.length, 2)
    t.equal(err[0].field, 'data.username')
    t.equal(err[1].field, 'data.password')
  })
})
