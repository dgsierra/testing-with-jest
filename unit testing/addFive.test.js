/* eslint-disable no-undef */
/* es-linter desactivate */
/* const { default: TestRunner } = require('jest-runner') */
// import TestRunner from 'jest-runner'
/* const addFive = require('./addFive.js') */
// import addFive from './addFive.js'
import addFive from './addFive.js'

test('returns the number plus 5', () => {
  expect(addFive(10)).toBe(15);
  expect(addFive(0)).toBe(5);
  expect(addFive(-5)).toBe(-5);
  expect(addFive(5)).toBe(10);
  expect(addFive(1)).toBe(6);
  expect(addFive(2)).toBe(7);
  expect(addFive(3)).toBe(8);
  expect(addFive(4)).toBe(9);
  expect(addFive(5)).toBe(10);
  expect(addFive(6)).toBe(11);
  expect(addFive(7)).toBe(12);
  expect(addFive(8)).toBe(13);
})
