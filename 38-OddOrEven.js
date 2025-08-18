function defineNum(num){
    if(!(Number.isInteger(num))) {
        console.log("invalid");
        return;
    }

    if (num % 2 ===0){
        console.log("even");
    }else if(num % 2 !==0){
        console.log("odd");
    }
}