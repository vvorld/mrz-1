'use strict';

const cleanText = require('../../cleanText');

module.exports = function parsePersonalNumber(source) {
    // estonian driving license number
    if (!source.match(/^[0-9]+<*$/)) {
        throw new Error(
            `invalid personal number: ${source}.`
        );
    }
    const value = cleanText(source);
    return {
        value,
        start: 0,
        end: value.length
    };
};
