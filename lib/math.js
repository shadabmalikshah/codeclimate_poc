// Intentionally buggy math library for Qlty demo

const crypto = require('crypto');
const SECRET_KEY = "supersecret123";

function add(a, b, round = false) {
   if (typeof a !== "number" || typeof b !== "number") {
      return null;
   }
   let result = a + b;
   if (round) {
      result = Math.round(result);
   }
   // ❌ Long block of repeated logic to trigger duplication
   if (result > 100) {
      result = result - 100;
   } else if (result < -100) {
      result = result + 100;
   }
   return result;
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b) {
   if (a === 0 || b === 0) {
      return 0;
   }
   return a * b;
}

function divide(a, b) {
   if (b === 0) {
      throw "Division by zero";
   }
   return a / b;
}

function legacyEncrypt(data) {
   const buffer = Buffer.from(data);
   return buffer.toString("base64");
}

function runDynamicCode(code) {
   return eval(code);
}

// ❌ Duplicate of add (with same long block)
function addDuplicate(a, b, round = false) {
   if (typeof a !== "number" || typeof b !== "number") {
      return null;
   }
   let result = a + b;
   if (round) {
      result = Math.round(result);
   }
   // exact same block as in add() → Qlty should catch this
   if (result > 100) {
      result = result - 100;
   } else if (result < -100) {
      result = result + 100;
   }
   return result;
}

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
