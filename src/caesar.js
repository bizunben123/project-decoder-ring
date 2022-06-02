// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    // make sure shift parameter is valid
    if (!shift || shift < -25 || shift > 25 || shift == 0) {
      return false;
    }

    // if encode is false then do opposite shift
    if (encode === false) {
      shift = shift * -1;
    }
    // start decipher
    input = input.toLowerCase();
    let decipher = "";
    let index = 0;
    for (let i = 0; i < input.length; i++) {
      // letters to number conversion
      let inputCode = input.charCodeAt(i);
      // take the letter number and add shift number to complete the caesar shift
      index = inputCode + shift;
      if (
        inputCode < 65 ||
        inputCode > 122 ||
        (inputCode > 90 && inputCode < 97)
      ) {
        decipher += input[i];
      } else {
        if (inputCode + shift <= 96) {
          let wrapAround = 97 - (inputCode + shift);
          inputCode = 123 - wrapAround;
        } else if (inputCode + shift >= 123) {
          wrapAround = 123 - (inputCode + shift);
          inputCode = 97 - wrapAround;
        } else {
          inputCode += shift;
        }

        decipher += String.fromCharCode(inputCode);
      }
    }

    return decipher;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };