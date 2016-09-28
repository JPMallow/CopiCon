'use strict';

angular.module('dummyAppIconApp.version', [
  'dummyAppIconApp.version.interpolate-filter',
  'dummyAppIconApp.version.version-directive'
])

.value('version', '0.1');
