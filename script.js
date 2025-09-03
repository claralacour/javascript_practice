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
