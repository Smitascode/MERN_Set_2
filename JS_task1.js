function reverseNumber(x) {
    // Convert the number to a string
    let str = x.toString();

    // Reverse the string
    let reversedStr = str.split('').reverse().join('');

    // Convert the reversed string back to a number
    let reversedNum = parseInt(reversedStr, 10);

    return reversedNum;
}

// Test the function
let x = 32243;
let reversed = reverseNumber(x);
console.log(reversed); // Output: 34223
