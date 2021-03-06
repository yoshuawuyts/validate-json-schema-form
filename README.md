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
