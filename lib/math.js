// Intentionally written with issues to trigger Qlty findings

// ❌ Unused dependency
const crypto = require('crypto');

// ❌ Hardcoded secret
const SECRET_KEY = "supersecret123";

// ❌ Inconsistent return types + unnecessary branching
function add(a, b, round = false) {
  if (typeof a !== "number" || typeof b !== "number") {
    return null;
  }
  let result = a + b;
  if (round) {
    result = Math.round(result);
  }
  return result;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  if (a === 0 || b === 0) {
    return 0; // redundant check
  }
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw "Division by zero"; // ❌ bad error handling
  }
  return a / b;
}

// ❌ Not covered in tests → reduces code coverage
function legacyEncrypt(data) {
  const buffer = Buffer.from(data);
  return buffer.toString('base64');
}

// ❌ Dangerous: use of eval
function runDynamicCode(code) {
  return eval(code);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  legacyEncrypt,
  runDynamicCode,
};
