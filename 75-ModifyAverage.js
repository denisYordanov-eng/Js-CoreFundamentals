function modifyAverage(number) {
    function getAverage(numStr) {
        let sum = 0;
        for (let char of numStr) {
            sum += Number(char);
        }
        return sum / numStr.length;
    }

    let numStr = number.toString();

    while (getAverage(numStr) <= 5) {
        numStr += '9';
    }
    console.log(numStr);
}

modifyAverage(101);