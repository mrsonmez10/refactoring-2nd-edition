import { expect } from "chai";
import { circumference } from "../../../src/chapter06/content05/ChangeFunctionDeclaration1.js";

describe("circumference", () => {
  it("should calculate circumference given a radius", () => {
    expect(circumference(100)).to.equal(628.3185307179587);
  });
});
