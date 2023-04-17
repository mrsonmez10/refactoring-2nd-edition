import { expect } from "chai";
import sinon from "sinon";
import {
  findMiscreant,
  alertForMiscreant,
} from "../../../src/chapter11/content01/SeparateQueryFromModifier.js";

describe("findMiscreant", () => {
  it("find Don and set off alarm", () => {
    const alarm = { setOff: function (msg) {} };

    const mock = sinon.mock(alarm);
    mock.expects("setOff").once().withArgs("Found Miscreant Don");

    expect(findMiscreant(["Tom", "Helen", "Don"], alarm)).to.equal("Don");
    alertForMiscreant(["Tom", "Helen", "Don"], alarm);
    mock.verify();
  });

  it("find John and set off alarm", () => {
    const alarm = { setOff: function (msg) {} };

    const mock = sinon.mock(alarm);
    mock.expects("setOff").once().withArgs("Found Miscreant John");

    expect(findMiscreant(["Tom", "Helen", "John"], alarm)).to.equal("John");
    alertForMiscreant(["Tom", "Helen", "John"], alarm);
    mock.verify();
  });
});
