// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let solved = "";
    let abc = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    // helper function to make sure only unique characters
    function is_unique(str) {
      let obj = {};
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (obj[char]) return false;
        else obj[char] = true;
      }
      return true;
    }
    // if alphabet parameter is not valid return false
    if (!alphabet || alphabet.length !== 26 || !is_unique(alphabet)) {
      return false;
    }
    // encoding process
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let index = abc.indexOf(input[i]);

        if (index === -1 && input[i] === " ") {
          solved += " ";
        } else {
          solved += alphabet[index];
        }
      }
    }
    // decoding process
    else if (!encode) {
      for (let i = 0; i < input.length; i++) {
        let index = alphabet.indexOf(input[i]);

        if (index === -1 && input[i] === " ") {
          solved += " ";
        } else {
          solved += abc[index];
        }
      }
    }
    console.log(solved);
    return solved;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

