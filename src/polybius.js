// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let solved = "";
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "(i/j)",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const polybiusS = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    // start of encoding process
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        input = input.toLowerCase();
        let index = alphabet.indexOf(input[i]);
        if (index === -1 && input[i] === " ") {
          solved += " ";
        } else if ((index === -1 && input[i] === "i") || input[i] === "j") {
          solved += polybiusS[8];
        } else {
          solved += polybiusS[index];
        }
      }
    }
    // start of the decode process
    else if (!encode) {
      let inputWithoutSpace = input.replace(/ /g, "");
      if (inputWithoutSpace.length % 2 !== 0) {
        return false;
      } else {
        let forInputArr = input.replace(/ /g, "  ");
        let inputArr = forInputArr.match(/.{1,2}/g);

        for (let i = 0; i < inputArr.length; i++) {
          let index = polybiusS.indexOf(inputArr[i]);
          if (index === -1) {
            solved += " ";
          } else {
            solved += alphabet[index];
          }
        }
      }
    }
    console.log(solved);
    return solved;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

