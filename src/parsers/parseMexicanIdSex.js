'use strict';

module.exports = function parseMexicanIdSex(source) {
  switch (source) {
    case 'M':
      return 'female';
    case 'H':
      return 'male';
    case '<':
      return 'nonspecified';
    default:
      throw new Error(`invalid sex: ${source}. Must be M, H or <.`);
  }
};
