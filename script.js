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

function max(max) {
    max.sort((a, b) => a - b);
    return max[max.length -1];
}

console.log(max([1, 2, 3]));

//opgave 3


const countVowels = (letters) => {
    const vowels = 'aeiouæøåAEIOUÆØÅ';
    let count = 0; 

    for(const characters of letters) {
        if (vowels.includes(characters)) {
            count++;
        }
    }
    return count;
};

console.log(countVowels('Åge bøjede syv fine rør ud.'));