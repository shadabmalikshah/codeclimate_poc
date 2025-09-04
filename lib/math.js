// lib/math.js

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
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

// 🔴 Duplication Example
function processUser1(user) {
  if (!user) return null;
  let profile = {
    name: user.name,
    age: user.age,
    email: user.email,
    address: user.address,
  };
  if (user.age > 18) {
    profile.status = "adult";
  } else {
    profile.status = "minor";
  }
  return profile;
}

function processUser2(user) {
  if (!user) return null;
  let profile = {
    name: user.name,
    age: user.age,
    email: user.email,
    address: user.address,
  };
  if (user.age > 18) {
    profile.status = "adult";
  } else {
    profile.status = "minor";
  }
  return profile;
}

// 🔴 Maintainability Smells
function messyFunction(x) {
  let unused = 123; // unused var
  console.log("Debug: ", x); // console.log (bad practice)

  if (x > 0) {
    if (x > 10) {
      if (x > 100) {
        if (x > 1000) {
          return "too big";
        } else {
          return "big enough";
        }
      } else {
        return "medium";
      }
    } else {
      return "small";
    }
  } else {
    return "negative";
  }
}

// 🔴 Security Issue (if lodash old version is added in package.json)
// Example vulnerable code:
function insecureMerge(obj1, obj2) {
  const _ = require("lodash"); // old version vulnerable
  return _.merge(obj1, obj2);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  processUser1,
  processUser2,
  messyFunction,
  insecureMerge,
};
