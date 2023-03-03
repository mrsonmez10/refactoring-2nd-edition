const {
	prepareMessage,
	isNumberEven,
	isNumberOdd,
	getCustomer,
	getPersons,
	downloadCV
} = require('../../../src/chapter04/content02/mixture.js');


describe('Prepare Message', () => {
	it('should get the prepared message message', () => {
		const results = prepareMessage('Jane');
		expect(results).toBe('Hey Jane');
		expect(results).toMatch('Jane');
		expect(results).toMatch(/Jane/);
	});
});

describe('Even', () => {
	it('should return true if number is even', () => {
		const results = isNumberEven(2);
		expect(results).toBeTruthy();
		expect(results).not.toBeFalsy();
	});
	it('should return false if number is not even', () => {
		const results = isNumberEven(3);
		expect(results).not.toBeTruthy();
		expect(results).toBeFalsy();
	});
});

describe('Odd', () => {
	it('should return true if number is odd', () => {
		const results = isNumberOdd(3);
		expect(results).toBeTruthy();
		expect(results).not.toBeFalsy();
	});
	it('should return false if number is not odd', () => {
		const results = isNumberOdd(4);
		expect(results).not.toBeTruthy();
		expect(results).toBeFalsy();
	});
});

describe('Customer', () => {
	it('should find customer by id', () => {
		const results = getCustomer(1);
		expect(results).toBeDefined();
		expect(results).not.toBeUndefined();

		expect(results).toEqual({ id: 1, name: 'Jane' });
		expect(results).toHaveProperty('id', 1);

		expect(results).toEqual(expect.objectContaining({ id: 1 }));
	});
});

describe('Persons', () => {
	it('should fetch all the persons', () => {
		const results = getPersons();
		expect(results).toHaveLength(4);
		expect(results).toContain('Doe');

		expect(results).toEqual(expect.arrayContaining(['Jane', 'Doe']));
	});
});

describe('Download CV', () => {
	it('should throw error if user does not provide path', () => {
		expect(() => {
			downloadCV();
		}).toThrow();
		expect(() => {
			downloadCV();
		}).toThrow('invalid URL');
		expect(() => {
			downloadCV(null);
		}).toThrow();
	});
	it('should get the contents from the CV', () => {
		const results = downloadCV('http://localhost:3000/cv/1');
		expect(results).toBe('Content');
	});
});