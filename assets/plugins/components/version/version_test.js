'use strict';

describe('dummyAppIconApp.version module', function() {
  beforeEach(module('dummyAppIconApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
