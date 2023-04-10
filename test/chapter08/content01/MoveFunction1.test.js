import { expect } from "chai";
import { trackSummary } from "../../../src/chapter08/content01/MoveFunction1.js";

describe("trackSummary", () => {
  it("calculate distance, pace and time between two points", () => {
    const newYork = {
      lat: 40.73061,
      lon: -73.935242,
    };

    const tokyo = {
      lat: 35.652832,
      lon: 139.839478,
    };

    expect(trackSummary([newYork, tokyo])).to.eql({
      distance: 6740.914927144901,
      pace: 0.02472463581991205,
      time: 10000,
    });
  });
});
