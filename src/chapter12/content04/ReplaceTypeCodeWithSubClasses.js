// Daha sonra Replace Conditional with Polymorphism kolay uygulanır
// Bir türün değerine bağlı olarak farklı kod çalıştırma

// This
function createEmployee(name, type) {
  return new Employee(name, type);
}


// to this
function createEmployee(name, type) {
  switch (type) {
    case "engineer":
      return new Engineer(name);
    case "salesman":
      return new Salesman(name);
    case "manager":
      return new Manager(name);
  }
}
