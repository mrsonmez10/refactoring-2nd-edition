function pricev0(order) {
  // price is = base price -­ quantity discount + shipping
  return order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

export function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shippingCost = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount + shippingCost;
}
