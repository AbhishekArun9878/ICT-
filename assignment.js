
// First Question

function isFirstElementPrime(arr) {
    const firstElement = arr[0];

    if (isPrime(firstElement)) {
        console.log(firstElement + ' is a prime number.');
    } else {
        console.log(firstElement + ' is not a prime number.');
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const myArray = [7, 10, 15, 3, 5];
isFirstElementPrime(myArray);




// Second Question

function MostFrequentItem(arr) {
    const frequency = {};

    arr.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
    });

    let mostFrequentItem;

    for (const item in frequency) {
        if (!mostFrequentItem || frequency[item] > frequency[mostFrequentItem]) {
            mostFrequentItem = item;
        }
    }

    console.log("Most frequent item: " + mostFrequentItem);
}

const Array = [1, 2, 3, 2, 4, 2, 5, 2, 6];
MostFrequentItem(Array);



// Third Question

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even.');
    } else {
        console.log(i + ' is odd.');
    }
}


//Fourth Question

function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 2;
    }

    return sum;
}

const Arrays = [1, 2, 3, 4, 5];
const result = sumOfSquares(Arrays);

console.log("Sum of squares: " + result);


