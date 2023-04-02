import { expect } from "chai";
import { getOrganization } from "../../../src/chapter07/content01/EncapsulateRecord.js";

describe("organization", () => {
  it("should give right name", () => {
    expect(getOrganization().name).to.equal("Acme Gooseberries");
  });

  it("should set name", () => {
    let organization = getOrganization();
    organization.name = "new name";
    expect(organization.name).to.equal("new name");
  });
});
