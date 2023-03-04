const {
    creditCalculator
} = require('../../../src/chapter04/content02/credit-score-calculation.js');

describe('Prepare Message', () => {
	it('should get the prepared message', () => {
		const results = creditCalculator(1000, 3);
		expect(results).toBeGreaterThan(0);
	});
});