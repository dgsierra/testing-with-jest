/* eslint-disable no-undef */
import { reverseString, calculator, capitalize, stringLength } from './string.js'

describe('The string is the correct length', () => {
  test('returns the length of the string', () => {
    // expect(stringLength('')).toBe(undefined)
    expect(stringLength('12345678901')).toBe(undefined)
    expect(stringLength('123456789')).toBe(9)
  })

  test('check for the reverse of the string', () => {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('hello world')).toBe('dlrow olleh')
    expect(reverseString('mom')).toBe('mom')
  })

  test('check for the reverse of the string', () => {
    expect(reverseString('hello')).toBe('olleh')
    expect(reverseString('hello world')).toBe('dlrow olleh')
    expect(reverseString('mom')).toBe('mom')
  })
})

describe('Testing the calculator', () => {
  expect(calculator.add(1, 2)).toBe(3)
  expect(calculator.subtract(1, 2)).toBe(-1)
  expect(calculator.multiply(15, 2)).toBe(30)
  expect(calculator.divide(15, 2)).toBe(7)
  expect(calculator.divide(15, 0)).toBe(NaN)
  expect(calculator.divide(0, 1)).toBe(0)
})

describe('Capitalice string recived', () => {
  expect(capitalize('hello')).toBe('Hello')
  expect(capitalize('world')).toBe('World')
  expect(capitalize('mom')).toBe('Mom')
  expect(capitalize('HeLlO')).toBe('Hello')
})
