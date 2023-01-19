export const calculator = (function () {
  function checkInputValidity(a, b) {
    if (typeof a !== 'number' || Number.isNaN(a) || typeof b !== 'number' || Number.isNaN(b)) {
      return false;
    }
    return true;
  }

  function add(a, b) {
    if (!checkInputValidity(a, b)) return undefined;
    return a + b;
  }
  function subtract(a, b) {
    if (!checkInputValidity(a, b)) return undefined;
    return a - b;
  }
  function multiply(a, b) {
    if (!checkInputValidity(a, b)) return undefined;
    return a * b;
  }
  function divide(a, b) {
    if (!checkInputValidity(a, b)) return undefined;
    return a / b;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();
