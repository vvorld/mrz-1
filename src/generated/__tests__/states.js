'use strict';

const states = require('../../index').states;

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const receivedLength = received.length;
    const pass = receivedLength >= floor && receivedLength <= ceiling;
    if (pass) {
      return {
        message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

describe('check countries', function () {
  it('Number of countries', function () {
    const codes = Object.keys(states);
    for (const code of codes) {
      if (code !== 'D' && code !== 'SI' && code !== 'AR') {
        expect(code).toBeWithinRange(2, 3);
      }
    }
    expect(states.CHE).toBe('Switzerland');
  });
});
