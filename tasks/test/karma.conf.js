module.exports = function(config) {

  var browsers = ['PhantomJS'];

  // karma configuration
  // http://karma-runner.github.io/0.12/config/configuration-file.html

  config.set({
      basePath: '../../',
      autoWatch: true,
      frameworks: ['mocha'],
      browserNoActivityTimeout: 120000,
      files: [
        'node_modules/mocha/mocha.js',
        'node_modules/chai/chai.js',
        'node_modules/sinon/lib/sinon.js',
        'node_modules/sinon-chai/lib/sinon-chai.js',
        'dist/' + process.env.LIBRARY_NAME + '.js',
        'test/specs/*.js',
        'test/runner.js'
      ],
      browsers: browsers,
      reporters: ['progress', 'coverage'],
      preprocessors: {
        '../dist/*': ['coverage'],
        'test/**/*.js': ['babel']
      },
      'babelPreprocessor': {},
      coverageReporter: {
        dir: './coverage/'
      },
      singleRun: true
  });
};
