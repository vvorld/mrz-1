'use strict';

module.exports = function parseDocumentNumber(source) {
  // eu driving license number
  if (!source.match(/^[A-Z0-9]{10}$/)) {
    throw new Error(
      `invalid document number: ${source}.`
    );
  }
  return source;
};
