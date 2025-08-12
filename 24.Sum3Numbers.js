function sum(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);
    function sumNumbers (num1, num2,num3) {
        return num1 + num2 + num3;
    }
    let result = sumNumbers(num1, num2, num3);
    console.log(result);
}
sum(['2','3','4']);