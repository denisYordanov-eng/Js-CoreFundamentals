function findTheBiggestOf3Numbers(arr) {
    let firstNumber = arr[0];
    let secondNumber = arr[1];
    let thirdNumber = arr[2];
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        console.log(firstNumber);
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log(secondNumber);
    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        console.log(thirdNumber);
    } else  if(firstNumber === secondNumber && secondNumber === thirdNumber) {
        console.log(firstNumber);
    }
}

findTheBiggestOf3Numbers(-20, -30, -10);