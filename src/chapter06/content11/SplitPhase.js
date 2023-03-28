// quantity = miktar
// discount = indirim
// shippingMethod = taşıma yöntemi
// shippingCost = taşıma maliyeti
// Threshold = eşik değeri
// fee = ücret

/*
  const product = {
    basePrice: 10,
    discountRate: 0.1,
    discountThreshold: 10,
  };

  const shippingMethod = {
    discountThreshold: 20,
    feePerCase: 5,
    discountedFee: 3,
  };
*/

function priceOrderv0(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;

  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
 
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  const shippingCost = quantity * shippingPerCase;

  const price = basePrice - discount + shippingCost;

  return price;
}

function applyingShippingCost(shippingMethod, priceData) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  const shippingCost = priceData.quantity * shippingPerCase;

  return priceData.basePrice - priceData.discount + shippingCost;
}

function calculatePriceData(product, quantity) {
  const basePrice = product.basePrice * quantity;

  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  return { basePrice: basePrice, quantity: quantity, discount: discount };
}

export function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePriceData(product, quantity);
  return applyingShippingCost(shippingMethod, priceData);
}
