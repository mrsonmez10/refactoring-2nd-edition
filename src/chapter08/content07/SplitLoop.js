// Split the loop which does two different things
// Easier to use
// Easier to understand because each loop will do only 1 thing

export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

  function totalSalary() {
    return people.reduce((total, person) => total + person.salary, 0);
  }

  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }
}
