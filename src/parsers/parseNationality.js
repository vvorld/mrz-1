'use strict';

const STATES = require('../generated/states');

const cleanText = require('./cleanText');

module.exports = function parseNationality(source) {
  if (source === '<<<') {
    return {
      value: '',
      start: 0,
      end: 0
    };
  }
  source = cleanText(source).replace(/0/g, 'O');
  var state = STATES[source];
  if (!state) {
    throw new Error(`invalid state code: ${source}`);
  }
  return {
    value: source,
    start: 0,
    end: source.length
  };
};
