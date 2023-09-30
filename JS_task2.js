function sortStringAlphabetically(str) {
    // Split the string into an array of characters, sort them, and join them back into a string
    return str.split('').sort().join('');
}

// Test the function
let inputString = 'webmaster';
let sortedString = sortStringAlphabetically(inputString);
console.log(sortedString); // Output: 'abeemrstw'
