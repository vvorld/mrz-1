'use strict';

const cleanText = require('../cleanText');

module.exports = function parseDocumentNumber(source, checkDigit, numberTail, optional) {
  let end, value;
  if (checkDigit === '<' && optional) {
    const firstFiller = optional.indexOf('<');
    const tail = optional.substring(0, firstFiller - 1);
    value = source + tail;
    end = value.length + 1;
  } else {
    value = cleanText(source) + cleanText(numberTail);
    end = value.length;
  }
  return {
    value,
    start: 0,
    end
  };
};
