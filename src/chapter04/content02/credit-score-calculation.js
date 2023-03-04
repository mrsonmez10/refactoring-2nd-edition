
/**
 * Js file naming conventions
 * scriptName.js
 * script-name.js
 * script_name.js
 */

/**
 * Test-first cycle
 *  Write a simple failing test
 *  Make the test pass by writing the minimum amount of code, don't bother with code quality
 *  Refactor the code by applying design principles/patterns
 * 
 *  !Create new tests for every defect
 */


const rate = 12;
function creditCalculator(amount, months) {
    const interest = (amount * (rate * 0.01)) / months;
    const total = ((amount / months) + interest);
    console.log(total)
    return total;
}

// TODO amount control methodu ekle 

module.exports = {
	creditCalculator
};