const jsonSchema = require('is-my-json-valid')
const getFormData = require('get-form-data')
const assert = require('assert')

module.exports = validateJsonSchemaForm

// Validate a form based on a JSON schema
// obj -> fn
function validateJsonSchemaForm (schema) {
  assert.equal(typeof schema, 'object')
  const validate = jsonSchema(schema)

  // validate an element
  // (str, obj?, fn) -> null
  return function (el, opts, cb) {
    if (!cb) {
      cb = opts
      opts = {}
    }

    const raw = getFormData(el)
    const data = {}

    Object.keys(raw).forEach(function (key) {
      const val = raw[key]
      if (val === '') return
      data[key] = val
    })

    const valid = validate(data, { greedy: true })
    if (!valid) return cb(validate.errors)
    cb(null, data)
  }
}
