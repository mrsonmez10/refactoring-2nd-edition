import { expect } from "chai";
import { taxableCharge } from "../../../src/chapter06/content09/CombineFunctionsIntoClass-Client2.js";

describe("CombineFunctionsIntoClass-Client2.js", () => {
  it("taxableCharge", () => {
    expect(taxableCharge).to.equal(0.9);
  });
});
