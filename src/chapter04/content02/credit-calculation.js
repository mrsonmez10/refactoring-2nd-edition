
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
    if(!isAmountValid(amount)) {
        throw new Error('Amount is not valid!');
    }
    const interest = (amount * (rate * 0.01)) / months;
    const total = ((amount / months) + interest);
    return total;
}

function isAmountValid(amount) {
    var flag = true;
    if (amount === null || amount === undefined) {
        flag = false;
      }
    else if (amount > 10000000) {
        flag = false;
    }
    else if (amount < 0) {
        flag = false;
    }

    return flag;
}

// console.log(creditCalculator(-1000, 12));

module.exports = { creditCalculator };
//export default creditCalculator; 

