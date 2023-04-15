import { expect } from "chai";
import { payAmount } from "../../../src/chapter10/content02/ReplaceNestedConditionalwithGuardClauses1.js";

describe("payAmount", () => {
  it("calculate pay amount for Separated", () => {
    expect(payAmount({ isSeparated: true, isRetired: false })).to.eql({
      amount: 0,
      reasonCode: "SEP",
    });
  });

  it("calculate pay amount for Retired", () => {
    expect(payAmount({ isSeparated: false, isRetired: true })).to.eql({
      amount: 0,
      reasonCode: "RET",
    });
  });

  it("calculate pay amount for not-retired and non-separated", () => {
    expect(payAmount({ isSeparated: false, isRetired: false })).to.eql({
      amount: 999,
      reasonCode: "UNICORN",
    });
  });
});
