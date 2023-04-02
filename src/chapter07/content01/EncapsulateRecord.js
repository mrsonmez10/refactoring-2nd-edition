/*
 * Classes were designed for information hiding
 * Classes and modules are the largest forms of encapsulation
 */

// Renaming advantage

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

  set name(aString) {
    this._name = aString;
  }

  get name() {
    return this._name;
  }
}

export const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

export function getOrganization() {
  return organization;
}
