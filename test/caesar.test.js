// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("If the shift value is not present, return false", () => {
    expect(caesar("thinkful")).to.be.false;
  });
  it("if the shift value is 0, return false", () => {
    expect(caesar("thinkful", 0)).to.be.false;
  });
  it("if shift is greater then 25, return false", () => {
    expect(caesar("thinkful", 99)).to.be.false;
  });
  it("if shift less than -25, return false", () => {
    expect(caesar("thinkful", -99)).to.be.false;
  });
  it("if shift 'thinkful' by 3, should return 'wklqnixo' ", () => {
    expect(caesar("thinkful", 3)).to.be.eql("wklqnixo");
  });
  it("if shift 'thinkful' by -3, should return 'qefkhcri' ", () => {
    expect(caesar("thinkful", -3)).to.be.eql("qefkhcri");
  });
  it("if decode 'wklqnixo', should return 'thinkful' ", () => {
    expect(caesar("wklqnixo", 3, false)).to.be.eql("thinkful");
  });
  it("should encode with spaces and change uppercase to lowercase ", () => {
    expect(caesar("This is a secret message!", 8)).to.be.eql(
      "bpqa qa i amkzmb umaaiom!"
    );
  });
  it("should decode with spaces and change uppercase to lowercase ", () => {
    expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.be.eql(
      "this is a secret message!"
    );
  });
});