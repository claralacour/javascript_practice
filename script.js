//opgave 1

const sum = (sumArray) => {
    let totalValue = 0;

    for(let i in sumArray) {
        totalValue += sumArray[i];
    }

    return totalValue;
};

console.log(sum([1, 2, 3]));
console.log(sum([10, 20, 30, 40]));


//opgave 2

const max = (numberArray) => {
    let largestNumber = 0;
    for(let i in numberArray) {
        if (i > largestNumber) {
            largestNumber = [i];
        }
    }
    return largestNumber;
}

console.log(max([1, 2, 3]));