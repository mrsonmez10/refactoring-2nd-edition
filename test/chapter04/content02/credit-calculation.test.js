const {
    creditCalculator
} = require('../../../src/chapter04/content02/credit-calculation.js');

describe('Credit Calculations', () => {
	it('throw error if amount is not valid', () => {
		expect(() => { creditCalculator(100000000000000, 3);}).toThrow();
		expect(() => { creditCalculator(null, 3);}).toThrow("Amount is not valid!");
		expect(() => { creditCalculator(-1000, 3);}).toThrow("Amount is not valid!");
	});
	it('should get the result from algorithm', () => {
		const results = creditCalculator(1000, 3);
		expect(results).toBeGreaterThan(0);
	});
});
