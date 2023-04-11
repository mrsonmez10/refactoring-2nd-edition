import { expect } from "chai";
import { Customer } from "../../../src/chapter08/content02/MoveField1.js";
import Money from "js-money";

describe("Customer", () => {
  it("calculates discount", () => {
    const customer = new Customer("Mike", 0.05);
    expect(customer.applyDiscount(new Money(500, Money.EUR))).to.eql(
      new Money(475, Money.EUR)
    );
  });
});
