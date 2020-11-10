'use strict';

module.exports = function parseDocumentCodeId(source) {
  const [firstLetter, secondLetter] = source;
  const allowedFirstLetters = new Set(['A', 'C', 'I', 'R', 'T']);
  if (!allowedFirstLetters.has(firstLetter)) {
    throw new Error(
      `invalid document code: ${source}. First character must be A, C, R, I or T`
    );
  }

  const forbiddenSecondsLetters = new Set(['V']);
  if (forbiddenSecondsLetters.has(secondLetter)) {
    throw new Error(
      `invalid document code: ${source}. Second character may not be V`
    );
  }

  if (secondLetter === '<') {
    return {
      value: firstLetter,
      start: 0,
      end: 1
    };
  } else {
    return source;
  }
};
