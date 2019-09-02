const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// get original Winner
const originalGetWinner = utils.getWinner

// reassign winner to always match p1
utils.getWinner = (p1, p2) => p1

// run tests for that specific case
const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup and reassign original winner so other tests won't be affected by this
utils.getWinner = originalGetWinner
