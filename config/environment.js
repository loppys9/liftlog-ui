/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'liftlog-ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    django: {
        csrf: '^api'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_HOST = 'http://127.0.0.1:8000';
    ENV.APP.BLAH_BLAH = 'testing, 1, 2, 3';
    ENV['simple-auth'] = {
      authorizer: 'authorizer:django-rest',
      serverTokenEndpoint: ENV.APP.API_HOST + '/auth/',
      crossOriginWhitelist: [ENV.APP.API_HOST]
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

     ENV.APP.API_HOST = 'http://127.0.0.1:8222';
    ENV['simple-auth'] = {
      authorizer: 'authorizer:django-rest',
      serverTokenEndpoint: ENV.APP.API_HOST + '/auth/',
      crossOriginWhitelist: [ENV.APP.API_HOST]
    };
  }

  return ENV;
};
