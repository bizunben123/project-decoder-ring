// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
  it("'thinkful' should equal '4432423352125413'", () => {
    expect(polybius("thinkful")).to.be.eql("4432423352125413");
  });
  it("'Hello world' should equal '3251131343 2543241341'", () => {
    expect(polybius("Hello world")).to.be.eql("3251131343 2543241341");
  });
  it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false", () => {
    expect(polybius("44324233521254134", false)).to.be.false;
  });
  it("Should leave space as is", () => {
    expect(polybius("3251131343 2543241341", false)).to.be.eql("hello world");
  });
  it("Shoud translate  42 to both 'i' and 'j'", () => {
    expect(polybius("4432423352125413", false)).to.be.equal("th(i/j)nkful");
  });
});