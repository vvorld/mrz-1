'use strict';

const parseTD1 = require('./td1');
const parseTD2 = require('./td2');
const parseTD3 = require('./td3');
const parseSwissDrivingLicense = require('./swissDrivingLicense');
const parseFrenchNationalId = require('./frenchNationalId');
const parseFrenchDrivingLicense = require('./frenchDrivingLicense');
const parseEstonianDrivingLicense = require('./estonianDrivingLicense');
const parseIrelandDrivingLicense = require('./irelandDrivingLicense');
const parseNetherlandsDrivingLicense = require('./netherlandsDrivingLicense');
const parseBotswanaTD1 = require('./botswanaTD1');
const parseCroatiaDrivingLicense = require('./croatiaDrivingLicense');
const parseMozambiqueTD1 = require('./mozambiqueTD1');
const parseMexicanIdCard = require('./mexicanIdCard');
const parseChileNationalID = require('./chileNationalID');
const parseKenyaIdCard = require('./kenyaIdCard');
const parseGuatemalaTD1 = require('./guatemalaTD1');

module.exports = {
  TD1: parseTD1,
  TD2: parseTD2,
  TD3: parseTD3,
  SWISS_DRIVING_LICENSE: parseSwissDrivingLicense,
  FRENCH_NATIONAL_ID: parseFrenchNationalId,
  FRENCH_DRIVING_LICENSE: parseFrenchDrivingLicense,
  ESTONIAN_DRIVING_LICENSE: parseEstonianDrivingLicense,
  IRELAND_DRIVING_LICENSE: parseIrelandDrivingLicense,
  NETHERLANDS_DRIVING_LICENSE: parseNetherlandsDrivingLicense,
  BOTSWANA_TD1: parseBotswanaTD1,
  CROATIA_DRIVING_LICENSE: parseCroatiaDrivingLicense,
  MOZAMBIQUE_TD1: parseMozambiqueTD1,
  MEXICAN_ID_CARD: parseMexicanIdCard,
  CHILE_NATIONAL_ID: parseChileNationalID,
  KENYA_ID_CARD: parseKenyaIdCard,
  GUATEMALA_TD1: parseGuatemalaTD1,
};
