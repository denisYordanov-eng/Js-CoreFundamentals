function cookingByNumbers(inputArr) {
    let number = inputArr[0];

    for (let i = 1; i < inputArr.length; i++) {
        let current = inputArr[i];
        if (current === "chop") {
            number = number / 2;
            console.log(number);
        } else if (current === "spice") {
            number = ++number;
            console.log(number);
        } else if (current === "bake") {
            number = number * 3;
            console.log(number);
        } else if (current === "fillet") {
            number = number * 0.8;
            console.log(number.toFixed(1));
        }else if (current === "dice") {
            number = Math.sqrt(number);
            console.log(number);
        }
    }
}
