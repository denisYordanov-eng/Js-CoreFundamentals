function strFrom1ToN(strNumber){
    let  number = Number(strNumber);
    let output = "";

    for(let i=1;i<=number;i++){
        let currentNumber=i;
        output += currentNumber;
    }
    console.log(output);
}
strFrom1ToN(10)