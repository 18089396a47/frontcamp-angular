require('angular');
require('angular-ui-router');
require('angular-mocks');

const testsContext = require.context('./test', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);