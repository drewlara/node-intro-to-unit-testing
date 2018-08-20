const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should return fizz, buzz, or fizz-buzz depending on if the numbers are divisible by 3,5 or both', function(){
		const normalCases = [
			{a: 6, expected: 'fizz'},
			{a: 10, expected: 'buzz'},
			{a: 30, expected: 'fizz-buzz'}
		];

		normalCases.forEach(function(input){
			const result = fizzBuzzer(input.a);
			expect(result).to.equal(input.expected);
		});
	});

	it('should raise error if args are not numbers', function(){
		const badInputs = ['a', '4', true];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		})
	})
});