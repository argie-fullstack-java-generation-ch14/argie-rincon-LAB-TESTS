const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divides 8 ÷ 2 to equal 4', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('divides -63 ÷ 7 to equal -9', () => {
  expect(calculator.divide(-63, 7)).toBe(-9);
});

test('multiplies 8 x 8.65 to equal 69.2', () => {
  expect(calculator.multiply(8, 8.65)).toBe(69.2);
});

test('multiplies 7 x 4 to equal 28', () => {
  expect(calculator.multiply(7, 4)).toBe(28);
});