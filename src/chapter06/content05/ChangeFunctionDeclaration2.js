export default class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer, isPriority) {
    console.assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }

  hasReservation(customer) {
    return this._reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}

/*
assert cond;

if (!cond)
    throw new AssertionError();

Run java program -> -enableassertions or -ea
*/
