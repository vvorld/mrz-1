'use strict';

var parseText = require('./parseText');

module.exports = function parseFirstName(source) {
  const withoutStart = source.replace(/.*?<{2}/, '');
  const value = parseText(withoutStart, /^[A-Z0-9<]+<*$/);
  const start = source.length - withoutStart.length;
  return {
    value,
    start,
    end: start + value.length
  };
};
