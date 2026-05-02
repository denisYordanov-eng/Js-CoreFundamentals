function processOddNumbers(arr) {
    let result = arr
        .filter((_, index) => index % 2 === 1)
        .map(n => n * 2)
        .reverse()
        .join(" ");
    console.log(result);
}

processOddNumbers([10, 15, 20, 25]);