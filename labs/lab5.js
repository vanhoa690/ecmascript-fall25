// ❌ Code sẽ bị ESLint báo lỗi
var calculateTotal = function (prices, taxRate) {
  var subtotal = 0;
  for (var i = 0; i < prices.length; i++) {
    subtotal += prices[i];
  }
  return subtotal * (1 + taxRate);
};
