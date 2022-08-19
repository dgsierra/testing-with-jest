import stringLength from './string.js'
describe('The string is the correct length', () => {
  test('returns the length of the string', () => {
    expect(stringLength('')).toBe(undefined)
    expect(stringLength('12345678901')).toBe(undefined)
    expect(stringLength('123456789')).toBe(9)
  })
})
