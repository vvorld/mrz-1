'use strict';

module.exports = function parseDocumentNumber(source) {
  // estonian driving license number
  if (!source.match(/^[A-Z]{2}[0-9]{6}$/)) {
    throw new Error(
      `invalid document number: ${source}.`
    );
  }
  return source;
};
