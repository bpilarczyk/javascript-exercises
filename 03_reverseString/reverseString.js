const reverseString = function(inputString) {
    let reverseArray = inputString.split('').reverse();
    let reverseOutput = reverseArray.join('');
    
    return reverseOutput;
};

// Do not edit below this line
module.exports = reverseString;
