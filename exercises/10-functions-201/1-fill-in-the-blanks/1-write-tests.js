'use strict';

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange numbers like
//  NaN, Infinity, -0.0, 1.0003, -Infinity, -NaN, ...

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
function add(x, y) {
  if (typeof x !== 'number') { throw new TypeError(); }
  if (typeof y !== 'number') { throw new TypeError(); }

  const result = x + y;

  if (typeof result !== 'number') { throw new TypeError(); }
  return result;
}

const _1_expect = -Infinity;
const _1_actual = add(0, -Infinity);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0.9997;
const _2_actual = add(-1.0003, 2);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 100;
const _3_actual = add(-0.0, 100);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 999;
const _4_actual = add(-1, 1000);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = -3;
const _5_actual = add(0.0, -3);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = -5;
const _6_actual = add(-2, -3);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 11;
const _7_actual = add(10,1);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = Infinity;
const _8_actual = add(Infinity, Infinity);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = -0.0293;
const _9_actual = add(0.0007, -0.03);
console.assert(_9_actual === _9_expect, 'Test 9');