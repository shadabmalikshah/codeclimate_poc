// Intentionally buggy math library for Qlty demo

// ❌ Unused dependency
const crypto = require('crypto');

// ❌ Hardcoded secret (security issue)
const SECRET_KEY = "supersecret123";

// ❌ Inconsistent return types, redundant branch
function add(a, b, round = false) {
   if (typeof a !== "number" || typeof b !== "number") {
      return null; // sometimes returns number, sometimes null
   }
   let result = a + b;
   if (round) {
      result = Math.round(result); // redundant
   }
   return result;
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b) {
   if (a === 0 || b === 0) {
      return 0; // ❌ redundant, multiplication already does this
   }
   return a * b;
}

function divide(a, b) {
   if (b === 0) {
      throw "Division by zero"; // ❌ throwing string instead of Error
   }
   return a / b;
}

// ❌ Not covered by tests → lowers coverage
function legacyEncrypt(data) {
   const buffer = Buffer.from(data);
   return buffer.toString("base64");
}

// ❌ Dangerous eval (security smell)
function runDynamicCode(code) {
   return eval(code);
}

// ❌ Duplicate function (copy of add) → duplication issue
function addDuplicate(a, b, round = false) {
   if (typeof a !== "number" || typeof b !== "number") {
      return null;
   }
   let result = a + b;
   if (round) {
      result = Math.round(result);
   }
   return result;
}

// ❌ Badly formatted code (spacing & indentation wrong on purpose)
function  messyFormat (a ,b ){ return a+b }

module.exports = {
   add,
   subtract,
   multiply,
   divide,
   legacyEncrypt,
   runDynamicCode,
   addDuplicate,
   messyFormat,
};
