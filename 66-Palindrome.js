function palindrome(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    if (reversedString === inputString) {
        console.log("true");
    } else {
        console.log("false");
    }
}