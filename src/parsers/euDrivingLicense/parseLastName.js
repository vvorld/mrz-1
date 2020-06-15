'use strict';

var parseText = require('../parseText');

module.exports = function parseLastName(source) {
  const parsed = parseText(source, /^[A-Z0-9<]+$/);
  return {
    value: parsed,
    start: 0,
    end: parsed.length
  };
};
