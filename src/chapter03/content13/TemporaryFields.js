function nameToObject(name) {
// Furkan Sönmez
  var fullName = name.split(" ");
  var firstName = fullName[0];
  var lastName = lastName[1];

  var name = {
    firstName: firstName,
    lastName: lastName,
  };

  return name;
}

function sum(a, b) {
  var total = a + b;
  return total;
}

function nameToObjectv2(name) {
  var fullName = name.split(" ");

  return {
    firstName: fullName[0],
    lastName: fullName[1],
  };
}

function sumv2(a, b) {
  return a + b;
}
