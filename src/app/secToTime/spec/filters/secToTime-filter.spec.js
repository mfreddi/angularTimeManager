'use strict';

describe('Filter: secToTime', function () {
// load the filter's module
  beforeEach(module('angularTimeManager'));
// initialize a new instance of the filter before each test
  var secToTime;
  beforeEach(inject(function ($filter) {
    secToTime = $filter('secToTime');
  }));
  it('should return the input prefixed with "secToTime filter:"', function () {
    var text = 'angularjs';
    expect(secToTime(text)).toBe('secToTime filter: ' + text);
  });
});
