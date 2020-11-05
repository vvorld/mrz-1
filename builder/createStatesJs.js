'use strict';

const fs = require('fs');

const states = fs
  .readFileSync(`${__dirname}/states.txt`, 'utf8')
  .split(/[\r\n]+/)
  .filter((c) => c !== '' && c.charAt(0) !== '#');

const statesObject = {};
for (var state of states) {
  const split = state.split(' ');
  let key = split[split.length - 1];
  if (key !== '_') {
    statesObject[key] = split
      .slice(0, split.length - 2)
      .join(' ');
  }
  key = split[split.length - 2];
  if (key !== '_') {
    statesObject[key] = split
      .slice(0, split.length - 2)
      .join(' ');
  }
}
statesObject.RKS = 'Kosovo';
statesObject.ZIM = 'Zimbabwe';
statesObject.DEU = 'Germany';

var result = [];
result.push("'use strict';");
result.push(`const states = ${JSON.stringify(statesObject, null, 2)};`);
result.push('Object.freeze(states);');
result.push('module.exports = states;');
result.push('');

fs.writeFileSync(`${__dirname}/../src/generated/states.js`, result.join('\n'));
