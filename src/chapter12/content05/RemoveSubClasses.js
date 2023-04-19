// this
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  
  get genderCode() {
    return "X";
  }
}

class Male extends Person {
  get genderCode() {
    return "M";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

// Client
const numberOfMales = people.filter((p) => p instanceof Male).length;

// to this
class Person {
  get genderCode() {
    return this._genderCode;
  }

  get isMale() {
    return "M" === this._genderCode;
  }
}

// client
const numberOfMales2 = people.filter((p) => p.isMale).length;
