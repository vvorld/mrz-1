'use strict';

module.exports = function parseDocumentNumber(source) {
  // ireland driving license number
  if (!source.match(/^[A-Z0-9]{10}$/)) {
    throw new Error(
      `invalid document number: ${source}.`
    );
  }
  return source;
};
