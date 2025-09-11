function aggregateSum(arr) {

    let result1  = function sumElementsOfArray() {
        return arr.reduce((a, b) => a + b);
    }
    let result2  =  function sumInverseValues() {
        return arr.reduce((a, b) => a + 1 / b, 0);
    }
    let result3 = function concatNumbers() {
       return  arr.join("");
    }
    console.log(result1());
    console.log(result2());
    console.log(result3());
}
