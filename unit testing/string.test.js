/* eslint-disable import/no-duplicates */
import stringLength from './string.js'
import { reverseString, calculator } from './string.js'

describe('The string is the correct length', () => {
  test('returns the length of the string', () => {
    expect(stringLength('')).toBe(undefined)
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

console.log(calculator.add(1, 2))