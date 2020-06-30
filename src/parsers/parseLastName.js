'use strict';

var parseText = require('./parseText');

module.exports = function parseLastName(source) {
<<<<<<< HEAD
  if (source.startsWith('<<')) {
    return {
      value: '',
      start: 0,
      end: 2
    }
  }
=======
>>>>>>> origin/master
  const parsed = parseText(source.replace(/<{2}.*/, ''), /^[A-Z0-9<]+<*$/);
  return {
    value: parsed,
    start: 0,
    end: parsed.length
  };
};
