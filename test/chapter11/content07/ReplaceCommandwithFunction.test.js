import { expect } from "chai";
import { charge } from "../../../src/chapter11/content07/ReplaceCommandwithFunction.js";

describe("ChargeCalculator", () => {
  const customer = { baseRate: 0.1 };
  const provider = { connectionCharge: 1000 };

  it("should calculate total  charge", () => {
    expect(charge(customer, 100, provider)).to.equal(1010);
  });
});
