// Intentionally buggy math library for Qlty demo

const crypto = require('crypto'); // ❌ unused dep
const SECRET_KEY = "supersecret123"; // ❌ hardcoded secret

// ❌ overly complex, duplicated function
function calculateScore(a, b, c) {
   let score = 0;
   if (a > 10) {
      if (b < 5) {
         score = a * b;
      } else {
         score = a + b;
         if (c > 0) {
            score = score / c;
         } else {
            score = score + 1; // ❌ unreachable if c <= 0
         }
      }
   } else {
      score = a - b;
   }

   // ❌ long repeated block
   if (score > 100) {
      score = score - 100;
   } else if (score < -100) {
      score = score + 100;
   }

   return score;
}

// ❌ exact duplicate of calculateScore (duplication issue)
function calculateScoreDuplicate(a, b, c) {
   let score = 0;
   if (a > 10) {
      if (b < 5) {
         score = a * b;
      } else {
         score = a + b;
         if (c > 0) {
            score = score / c;
         } else {
            score = score + 1;
         }
      }
   } else {
      score = a - b;
   }

   if (score > 100) {
      score = score - 100;
   } else if (score < -100) {
      score = score + 100;
   }

   return score;
}

function add(a, b) {
   let unused = 123; // ❌ unused variable
   return a + b;
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
      throw "Division by zero"; // ❌ bad practice: throw string
   }
   return a / b;
}

function legacyEncrypt(data) {
   const buffer = Buffer.from(data);
   return buffer.toString("base64");
}

function runDynamicCode(code) {
   return eval(code); // ❌ security issue
}

// ❌ bad formatting
function  messyFormat (a ,b ){ return a+b }

module.exports = {
   calculateScore,
   calculateScoreDuplicate,
   add,
   subtract,
   multiply,
   divide,
   legacyEncrypt,
   runDynamicCode,
   messyFormat,
};
