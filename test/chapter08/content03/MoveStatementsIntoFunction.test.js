import { expect } from "chai";
import {
  photoDiv,
  renderPerson,
} from "../../../src/chapter08/content03/MoveStatementsIntoFunction.js";

const date = new Date("May 10, 2019");

const aPerson = {
  name: "Furkan",
  photo: {
    title: "holiday",
    location: "Türkiye",
    date: date,
  },
};

describe("photoDiv", () => {
  it("render a photo div", () => {
    expect(photoDiv(aPerson.photo)).to.equal(
      "<div>\n<p>title: holiday</p>\n<p>location: Türkiye</p>\n<p>date: Fri May 10 2019</p>\n</div>"
    );
  });
});

describe("renderPerson", () => {
  it("render person pest", () => {
    expect(renderPerson(aPerson)).to.equal(
      "<p>Furkan</p>\n\n<p>title: holiday</p>\n<p>location: Türkiye</p>\n<p>date: Fri May 10 2019</p>"
    );
  });
});
