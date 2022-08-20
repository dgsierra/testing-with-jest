/* eslint-disable no-unused-vars */
export const stringLength = (str) => {
  if (str.length < 10 && str.length > 1) {
    return str.length
  }
}

export const reverseString = (str) => {
  return str.split('').reverse().join('')
}

class Calculator {
  add (num1, num2) {
    return num1 + num2
  }

  subtract (num1, num2) {
    return num1 - num2
  }

  multiply (num1, num2) {
    return num1 * num2
  }

  divide (num1, num2) {
    return parseInt(num1 / num2)
  }
}

export const calculator = new Calculator()

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
