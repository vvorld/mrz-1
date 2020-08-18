'use strict';

const parse = require('../parse');

describe('parse MEXICAN_ID_CARD', () => {
  it('MEXICAN ID CARD - valid FEMALE', () => {
    const data = [
      'IDMEX1252712341<<0768016805808',
      '7509292M2412311MEX<07<<19425<7',
      'GOGONEL<HERNANDEZ<<NUBIA<GABRI'
    ];

    const result = parse(data);
    expect(result).toMatchObject({
      format: 'MEXICAN_ID_CARD',
      valid: true
    });
    expect(result.fields).toStrictEqual({
      documentCode: 'ID',
      issuingState: 'MEX',
      documentNumber: '125271234',
      documentNumberCheckDigit: '1',
      birthDate: '750929',
      birthDateCheckDigit: '2',
      sex: 'female',
      optional1: '  0768016805808',
      optional2: ' 07  19425',
      expirationDate: '241231',
      expirationDateCheckDigit: '1',
      nationality: 'MEX',
      compositeCheckDigit: '7',
      lastName: 'GOGONEL HERNANDEZ',
      firstName: 'NUBIA GABRI'
    });
  });

  it('MEXICAN ID CARD - valid MALE', () => {
    const data = [
      'IDMEX1252712341<<0768016805808',
      '7509292H2412311MEX<07<<19425<7',
      'GOGONEL<HERNANDEZ<<NUBIA<GABRI'
    ];

    const result = parse(data);
    expect(result).toMatchObject({
      format: 'MEXICAN_ID_CARD',
      valid: true
    });
    expect(result.fields).toStrictEqual({
      documentCode: 'ID',
      issuingState: 'MEX',
      documentNumber: '125271234',
      documentNumberCheckDigit: '1',
      birthDate: '750929',
      birthDateCheckDigit: '2',
      sex: 'male',
      optional1: '  0768016805808',
      optional2: ' 07  19425',
      expirationDate: '241231',
      expirationDateCheckDigit: '1',
      nationality: 'MEX',
      compositeCheckDigit: '7',
      lastName: 'GOGONEL HERNANDEZ',
      firstName: 'NUBIA GABRI'
    });
  });
});
