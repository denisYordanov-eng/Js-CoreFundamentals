function wordsToUppercase(inputString) {
    let words = inputString.split(/\W+/).filter(word => word.length > 0);
    let upWords = "";
    for (let i = 0; i < words.length; i++) {
        let upperCaseWord = words[i].toUpperCase();
        upWords += upperCaseWord + ', ';
    }
    let outputString = upWords.substring(0, upWords.length - 2);
    console.log(outputString);
}