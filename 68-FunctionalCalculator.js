function functionalCalculator(num1, num2, operator) {
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
    }
    console.log(result);
}

functionalCalculator(2,3,'*');