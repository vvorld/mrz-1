'use strict';

const parse = require('../parse');

describe('parse TD2', () => {
  it('Utopia example', function () {
    const MRZ = [
      'I<UTOERIKSSON<<ANNA<MARIA<<<<<<<<<<<',
      'D231458907UTO7408122F1204159<<<<<<<6'
    ];

    const result = parse(MRZ);
    const failed = result.details.filter((a) => !a.valid);
    expect(result).toMatchObject({
      format: 'TD2',
      valid: false
    });
    expect(failed).toHaveLength(2);
    expect(result.fields).toStrictEqual({
      firstName: 'ANNA MARIA',
      lastName: 'ERIKSSON',
      nationality: null,
      issuingState: null,
      documentNumber: 'D23145890',
      documentNumberCheckDigit: '7',
      sex: 'female',
      documentCode: 'I',
      birthDate: '740812',
      birthDateCheckDigit: '2',
      expirationDate: '120415',
      expirationDateCheckDigit: '9',
      compositeCheckDigit: '6',
      optional: ''
    });
    expect(result.valid).toStrictEqual(false);
  });

  it('not filled nationality example', function () {
    const MRZ = [
      'I<UTOERIKSSON<<ANNA<MARIA<<<<<<<<<<<',
      'D231458907<<<7408122F1204159<<<<<<<6'
    ];

    const result = parse(MRZ);
    const failed = result.details.filter((a) => !a.valid);
    expect(result).toMatchObject({
      format: 'TD2',
      valid: false
    });
    expect(failed).toHaveLength(1);
    expect(result.fields).toStrictEqual({
      firstName: 'ANNA MARIA',
      lastName: 'ERIKSSON',
      nationality: '',
      issuingState: null,
      documentNumber: 'D23145890',
      documentNumberCheckDigit: '7',
      sex: 'female',
      documentCode: 'I',
      birthDate: '740812',
      birthDateCheckDigit: '2',
      expirationDate: '120415',
      expirationDateCheckDigit: '9',
      compositeCheckDigit: '6',
      optional: ''
    });
    expect(result.valid).toStrictEqual(false);
  });

  it('digits in names', () => {
    const MRZ = [
      'I<UTOKOZLOVSKA8<<L7DMILA<PETROVNA<<<',
      'D231458907<<<7408122F1204159<<<<<<<6'
    ];
    const result = parse(MRZ);
    expect(result.fields.firstName).toStrictEqual('L7DMILA PETROVNA');
    expect(result.fields.lastName).toStrictEqual('KOZLOVSKA8');
  });

  it('space in document number', () => {
    const MRZ = [
      'I<UTOERIKSSON<<ANNA<MARIA<<<<<<<<<<<',
      '592988362<<<<7408122F12041590804<<<6'
    ];
    const result = parse(MRZ);
    expect(result.fields.documentNumber).toStrictEqual('592988362080');
    expect(result.fields.documentNumberCheckDigit).toStrictEqual('4');
  });
});
