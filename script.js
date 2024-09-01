//1.Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not.// 
function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2 || num === 3) return true; 

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function checkFirstElementPrime(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    const firstElement = arr[0];

    if (typeof firstElement !== 'number') {
        return "First element is not a number";
    }

    return isPrime(firstElement) ? `${firstElement} is a prime number` : `${firstElement} is not a prime number`;
}
const arr = [23,33,5,7,2];
console.log(checkFirstElementPrime(arr)); 


// 2.Write a JavaScript program to find the most frequent item of an array//


function mostFrequentItem(arr1) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequent = null;
    for (let item of arr1) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;

        
        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostFrequent = item;
        }
    }

    return `The most frequent item is '${mostFrequent}' with a count of ${maxCount}`;
}
const arr1 = [2,3,5,6,3,7,3,9,3];
console.log(mostFrequentItem(arr1));
//3.Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.//

for (let i = 0; i < 15; i++) {
    if (i%2==0) {
        console.log(i+ " is even")
    }
    else{
        console.log(i+ ' is odd')
    }
}

//4.Write a JavaScript program to find the sum of squares of the elements of an array.//

    function sum_square(arr2) {
        let sum = 0;
        for (let i = 0; i < arr2.length; i++) {
            sum += arr2[i] * arr2[i]; 
        }
        return sum;
    }
    const array = [2,4,5,7];
    console.log("The sum of squares is:", sum_square(array)); 
       



