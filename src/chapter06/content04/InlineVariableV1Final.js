function isDeliveryFreeV0(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
