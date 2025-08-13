function checkLetterCount(str, letter){

    let counterLetter = 0;
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) === letter){
            counterLetter++;
        }
    }
    console.log(counterLetter);
}