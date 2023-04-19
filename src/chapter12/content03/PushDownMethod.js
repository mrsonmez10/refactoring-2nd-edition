// Yöntem yalnızca bir alt sınıfla ilgiliyse, üst sınıftan alt sınıfa taşınmalıdır.

// this
class Employee {
  get quota() {}
}

class Engineer extends Employee {}

class Salesman extends Employee {}




// to this
class Employee {}

class Engineer extends Employee {}

class Salesman extends Employee {
  get quota() {}
}
