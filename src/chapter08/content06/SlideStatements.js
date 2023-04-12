// NOTES:
// Move related code to near each other
// It makes code easier to understand and easier to extract function

// BAD WAY
const pricingPlan = retrievePricingPlan();
const order = retreiveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;

// TRUE WAY
const pricingPlanv2 = retrievePricingPlanv2();
const chargePerUnitv2 = pricingPlanv2.unit;
const orderv2 = retreiveOrderv2();
let chargev2;

// Another example
let result;
if (availableResources.length === 0) {
  result = createResource();
  allocatedResources.push(result);
} else {
  result = availableResources.pop();
  allocatedResources.push(result);
}
return result;


// Another example soln
let resultv2;
if (availableResources.length === 0) {
  result = createResource();
} else {
  result = availableResources.pop();
}
allocatedResources.push(result);
return resultv2;
