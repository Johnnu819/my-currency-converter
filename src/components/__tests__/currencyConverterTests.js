const mock_rates = {
  USD: 1.1,
  GBP: 0.85,
  EUR: 1,
};

// Helper function to convert currency
export function convertCurrency(amount, fromCurrency, toCurrency, rates) {
  if (!rates[fromCurrency] || !rates[toCurrency]) {
    throw new Error("Invalid currency");
  }
  const baseAmount = amount / rates[fromCurrency];
  return baseAmount * rates[toCurrency];
}

test("converts from one currency to another correctly", () => {
  const result = convertCurrency(100, "EUR", "USD", mock_rates);
  expect(result).toBeCloseTo(110);
});

test("throws error for invalid currency", () => {
  expect(() => convertCurrency(100, "EUR", "XXX", mock_rates)).toThrow("Invalid currency");
});

