# validate-json-schema-form
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Validate a form using [JSON Schema][json-schema].

## Installation
```sh
$ npm install validate-json-schema-form
```

## Usage
```html
<form id="signup-form">
  <input name="username" type="text" placeholder="username"></input>
  <input name="password" type="password" placeholder="password"></input>
</form>
```

```js
const validator = require('validate-json-schema-form')

const validate = validator({
  required: [ 'username' ],
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' }
  }
})

const form = document.querySelector('#signup-form')
validate(form, (err, data) => {
  if (err) console.error(err)
  console.log(data)
})
```

## API
### validate = validator(schema)
Create a form validator out of a JSON Schema.

### validate(el, [opts], cb(err, data))
Validate a form element and call a callback with the results. Opts can contain
the following values:
- __[tbi]__ `partial=false` - set to `true` to only validate non-empty values.
- __[tbi]__ `formats` - define custom formats.
- __[tbi]__ `schemas` - reference external schemas.

## FAQ
### Why did you write this?
JSON Schema is the standardized answer to validation. At the time of writing
there were no other JSON Schema based form validators available on npm.

### Why use JSON-Schema and not something else?
Unlinke other methods of validation, JSON Schema is broadly used and is in the
process of being standardized. This means that the same validation can freely
translate between implementations and languages, as long as the spec is
adhered. This way validation becomes more robust, and eventually a solved
problem.

### How can I help move JSON Schema forward?
The current JSON Schema draft (v4) expired in August 2013. Fortunately there's
still a large community working towards a v5 spec. Check out the following
links if you're interested in contributing:
- [json-schema/issues](https://github.com/json-schema/json-schema/issues)
- [json-schema/v5-discussion](https://github.com/json-schema/json-schema/issues/167)
- [json-schema-spec/v5-issues](https://github.com/json-schema-org/json-schema-spec/search?q=is%3Aopen&type=Issues&utf8=%E2%9C%93)

## See Also
- [json-schema.org][json-schema]
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[json-schema]: http://json-schema.org/

[npm-image]: https://img.shields.io/npm/v/validate-json-schema-form.svg?style=flat-square
[npm-url]: https://npmjs.org/package/validate-json-schema-form
[travis-image]: https://img.shields.io/travis/yoshuawuyts/validate-json-schema-form/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/validate-json-schema-form
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/validate-json-schema-form/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/validate-json-schema-form
[downloads-image]: http://img.shields.io/npm/dm/validate-json-schema-form.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/validate-json-schema-form
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
