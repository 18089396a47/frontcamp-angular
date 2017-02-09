require('angular');
require('angular-mocks');
require('angular-ui-router');

const testsContext = require.context('./test', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);