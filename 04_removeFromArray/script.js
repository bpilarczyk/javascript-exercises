function removeFromArray(inputArray, ...unwantedElements) {

    let unwantedElementArray = Array.from(unwantedElements);
    let outputArray = inputArray;
    console.log(unwantedElementArray);
    // check for duplicates of the unwanted number in the input/output array
    const duplicates = outputArray.filter((element, index) => outputArray.indexOf(element) !== index);

    console.log(duplicates);
    unwantedElementArray.forEach((item) => {
        while (outputArray.includes(item)) {
            console.log(`Dupa: ${item}`);
            let indexUnwantedElement = outputArray.indexOf(item);
            outputArray.splice(indexUnwantedElement, 1);
        }
    });

    return outputArray;
}