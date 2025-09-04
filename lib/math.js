// math.js - intentionally messy for Qlty demo

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// 🔴 DUPLICATION: repeated logic (same code twice)
function duplicateLogic1(a, b) {
  let result = a + b;
  if (result > 100) {
    result = 100;
  }
  return result;
}

function duplicateLogic2(a, b) {
  let result = a + b;
  if (result > 100) {
    result = 100;
  }
  return result;
}

// 🔴 MAINTAINABILITY: deep nesting + unused variable
function messyFunction(x) {
  let unusedVar = 123; // unused → code smell
  if (x > 0) {
    if (x > 10) {
      if (x > 100) {
        return "too big";
      } else {
        return "big enough";
      }
    } else {
      return "small";
    }
  } else {
    return "negative";
  }
}

// 🔴 MAINTAINABILITY: long function with magic numbers
function veryLongFunction(num) {
  let result = num * 42; // magic number
  for (let i = 0; i < 10; i++) {   // another magic number
    result += i;
  }
  if (result > 500) {
    return "huge";
  }
  return result;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  duplicateLogic1,
  duplicateLogic2,
  messyFunction,
  veryLongFunction
};
