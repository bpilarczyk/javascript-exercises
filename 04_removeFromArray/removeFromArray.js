const removeFromArray = function(inputArray, ...unwantedElements) {

    let unwantedElementArray = Array.from(unwantedElements);
    let outputArray = inputArray;
    
    unwantedElementArray.forEach((item) => {
        while (outputArray.includes(item)) {
            let indexUnwantedElement = outputArray.indexOf(item);
            outputArray.splice(indexUnwantedElement, 1);
        }
    });

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
