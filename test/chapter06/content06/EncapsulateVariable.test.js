import { expect } from "chai";
import { getDefaultOwner, setDefaultOwner} from "../../../src/chapter06/content06/EncapsulateVariable.js";

describe("defaultOwner", () => {
  it("is Martin Fowler", () => {
    let spaceship = {};
    spaceship.owner = getDefaultOwner();

    expect(spaceship.owner.firstName).to.equal("Martin");
    expect(spaceship.owner.lastName).to.equal("Fowler");
  });

  it("can be set", () => {
    setDefaultOwner({ firstName: "Furkan", lastName: "Sonmez"});

    let newDefaultUser = getDefaultOwner();

    expect(newDefaultUser.firstName).to.equal("Furkan");
    expect(newDefaultUser.lastName).to.equal("Sonmez");
  }); 

  it("can not be changed outside the code", () => {
    let defaultUser = getDefaultOwner();
    let anotherDefaultUser = getDefaultOwner();

    anotherDefaultUser.lastName = "new last name";

    expect(getDefaultOwner().firstName).to.equal(defaultUser.firstName);
    expect(getDefaultOwner().lastName).to.equal(defaultUser.lastName);
  });
});
