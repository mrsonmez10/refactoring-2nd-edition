import { expect } from "chai";
import {
  Person,
  Department,
} from "../../../src/chapter07/content07/HideDelegate.js";

describe("Person", () => {
  const aPerson = new Person("Tom", new Department("aManager", "999"));

  it("report tracking information", () => {
    expect(aPerson.name).to.eql("Tom");
    expect(aPerson.manager).to.eql("aManager");
    expect(aPerson.chargeCode).to.eql("999");
  });
});
