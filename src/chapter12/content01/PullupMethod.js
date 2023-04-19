// Soyut Sınıflar, alt sınıflara uygulama ayrıntılarını sağlamak istiyor
// ancak sınıfınızın bir örneğinin doğrudan örneklenmesine izin vermek istemiyorsanız
// (bu, bir sınıfı kısmen tanımlamanıza olanak tanır) iyi bir seçimdir.

// This
class Employee {}

class Salesman extends Employee {
  get name() {}
}

class Engineer extends Employee {
  get name() {}
}


// to this
class Employee {
  get name() {}
}

class Salesman extends Employee {}
class Engineer extends Employee {}
