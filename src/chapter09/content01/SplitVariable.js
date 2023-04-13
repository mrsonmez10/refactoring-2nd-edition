// Birden fazla sorumluluğu olan herhangi bir değişken,
// her sorumluluk için bir tane olmak üzere birden fazla değişkenle değiştirilmelidir

// Anlaması kolaylaşır

let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);

const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

// Real Example
function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * seco;
  }
  return result;
}

function distanceTravelledv2(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}
