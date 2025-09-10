function solve(inputNumber){
    if(!isNaN(inputNumber)) {
        for (let i = 1; i <= inputNumber; i++) {
            console.log('* '.repeat(inputNumber).trim());
        }
    }else {
        for (let i = 1; i <= 5; i++) {
            console.log('* '.repeat(5).trim());
        }
    }
}
solve(2);