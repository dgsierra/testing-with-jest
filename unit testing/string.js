/* eslint-disable no-unused-vars */
export default function stringLength (str) {
  if (str.length < 10 && str.length > 1) {
    return str.length
  }
}

const reverseString = (str) => {
  return str.split('').reverse().join('')
}

console.log(reverseString('hello'))
export { reverseString }