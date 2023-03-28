import { expect } from "chai";
import { baseCharge } from "../../../src/chapter06/content09/CombineFunctionsIntoClass-Client1.js";

describe("CombineFunctionsIntoClass-Client1.js", () => {
  it("baseCharge", () => {
    expect(baseCharge).to.equal(1);
  });
});
