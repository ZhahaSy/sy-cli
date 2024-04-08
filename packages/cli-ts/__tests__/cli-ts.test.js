'use strict';

const cliTs = require('..');
const assert = require('assert').strict;

assert.strictEqual(cliTs(), 'Hello from cliTs');
console.info('cliTs tests passed');
