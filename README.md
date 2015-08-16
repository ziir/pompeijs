Pompei is a JavaScript library.
====================

[![Build Status][travis-image]][travis-url]

[![Dependency Status][gemnasium-image]][gemnasium-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]

[![MIT License][license-image]][license-url]

[![Gitter][gitter-image]][gitter-url]

## Tools available

- [babeljs](https://babeljs.io/)
- [webpack](https://github.com/webpack/webpack)
- [karma](https://github.com/karma-runner/karma)
- [chai](https://github.com/chaijs/chai)
- [eslint](https://github.com/eslint/eslint)
- [sinon](https://github.com/cjohansen/Sinon.JS)
- [serve](https://github.com/tj/serve)

# Usage

```shell
$ npm install
```

## Available tasks

### Build and test
```shell
$ ./make # or also `$ npm run default`
```

### Convert the ES6 code into valid ES5 combining all the modules into one single file
```shell
$ ./make build # or also `$ npm run build`
```

### Run all the tests
```shell
$ ./make test # or also `$ npm run test`
```

### Start a nodejs static server
```shell
$ ./make serve # or also `$ npm run serve`
```

### To compile and/or test the project anytime a file gets changed
```shell
$ ./make watch # or also `$ npm run watch`
```

[npm-url]: https://npmjs.org/package/pompei
[npm-version-image]: http://img.shields.io/npm/v/pompei.svg
[npm-downloads-image]: http://img.shields.io/npm/dm/pompei.svg

[gemnasium-image]: https://img.shields.io/gemnasium/pompeijs/pompeijs.svg
[gemnasium-url]: https://gemnasium.com/pompeijs/pompeijs

[travis-url]:https://travis-ci.org/Pompeijs/pompeijs
[travis-image]: https://img.shields.io/travis/Pompeijs/pompeijs.svg

[license-url]: LICENSE
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg

[gitter-url]: https://gitter.im/Pompeijs/pompeijs
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
