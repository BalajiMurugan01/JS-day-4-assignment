// 1 Print odd numbers in an array:
const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);
// 2 Convert all the strings to title caps in a string array:
const convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

// IIFE
const titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(['hello', 'world', 'javascript']);
console.log(titleCapsArray);
// 3 Sum of all numbers in an array:
const sumArray = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};

// IIFE
const totalSum = (function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
})([1, 2, 3, 4, 5]);
console.log(totalSum);
// 4 Return all the prime numbers in an array:
// Anonymous function
const getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

// IIFE
const primeNumbersArray = (function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
})([2, 3, 5, 7, 9, 11]);
console.log(primeNumbersArray);
// 5 Return all the palindromes in an array:
// Anonymous function
const getPalindromes = function(arr) {
    return arr.filter(function(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
};

// IIFE
const palindromeArray = (function(arr) {
    return arr.filter(function(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    });
})(['level', 'hello', 'madam']);
console.log(palindromeArray);
// 6 Return median of two sorted arrays of the same size:
// Anonymous function
const getMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const length = sortedArray.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
        return sortedArray[middle];
    }
};

// IIFE
const medianResult = (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const length = sortedArray.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    } else {
        return sortedArray[middle];
    }
})([1, 3, 5], [2, 4, 6]);
console.log(medianResult);
// 7 Remove duplicates from an array:
// Anonymous function
const removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

// IIFE
const uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);
// 8 Rotate an array by k times:
// Anonymous function
const rotateArray = function(arr, k) {
    const len = arr.length;
    const rotations = k % len;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
};

// IIFE
const rotatedResult = (function(arr, k) {
    const len = arr.length;
    const rotations = k % len;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
})([1, 2, 3, 4, 5], 2);
console.log(rotatedResult);
// Arrow function---------------------------------------------------
// 1 Print odd numbers in an array:
const printOdd = arr => arr.forEach(num => { if (num % 2 !== 0) console.log(num); });

printOdd([1, 2, 3, 4, 5]);
// 2 Convert all the strings to title caps in a string array:
const convertToCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

const CapsArray = convertToTitleCaps(['hello', 'world', 'javascript']);
console.log(titleCapsArray);
// 3 Sum of all numbers in array
const sumArr= arr => arr.reduce((sum, num) => sum + num, 0);

const totalSumarr = sumArray([1, 2, 3, 4, 5]);
console.log(totalSum);
// 4 Return all the prime numbers in an array:
const getPrime = arr => arr.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
});

const primeArray = getPrimeNumbers([2, 3, 5, 7, 9, 11]);
console.log(primeArray);
// 5 Return all the palindromes in an array:
const getPalin = arr => arr.filter(str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
});

const palinArray = getPalindromes(['level', 'hello', 'madam']);
console.log(palindromeArray);





