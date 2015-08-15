Pompei is a JavaScript library.
====================

[![Build Status][travis-image]][travis-url]

[![Dependency Status][gemnasium-image]][gemnasium-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]

[![MIT License][license-image]][license-url]

[![Sauce Test Status][saucelabs-image]][saucelabs-url]

## Tools available

- [babeljs](https://babeljs.io/)
- [webpack](https://github.com/webpack/webpack)
- [karma](https://github.com/karma-runner/karma)
- [chai](https://github.com/chaijs/chai)
- [eslint](https://github.com/eslint/eslint)
- [sinon](https://github.com/cjohansen/Sinon.JS)
- [serve](https://github.com/tj/serve)

# Usage

Once you've downloaded the files in this repo please run the following command in your terminal from the project folder (it may require `sudo`):

```shell
$ npm install
```

Browsing the [make](make) file you will find all the available terminal commands to compile/test your project. __This file contains also the script name used for the output__
All the build tasks available are based on the __native javascript promises__ so you will be able to chain and combine them as you prefer

If you have installed correctly all the nodejs modules you can start writing your javascript modules into the `src` folder of course using the awesome javascript es6 syntax.

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

# Dependencies

None.


[npm-url]: https://npmjs.org/package/pompei
[npm-version-image]: http://img.shields.io/npm/v/pompei.svg
[npm-downloads-image]: http://img.shields.io/npm/dm/pompei.svg

[gemnasium-image]: https://img.shields.io/gemnasium/pompeijs/pompeijs.svg
[gemnasium-url]: https://gemnasium.com/pompeijs/pompeijs

[travis-url]:https://travis-ci.org/pompeijs/pompeijs
[travis-image]: https://img.shields.io/travis/pompeijs/pompeijs.svg

[license-url]: LICENSE
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg
