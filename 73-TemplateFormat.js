function printTemplateFormat(inputArr) {
    let  output = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    output += "<quiz>\n";
    for(let i= 0; i < inputArr.length; i+=2){
        let question = inputArr[i];
        let  answer = inputArr[i+1];
        output +=  " "+"<question>" + "\n";
        output += "     "+ question + "\n";
        output += " " + "</question>\n";
        output += " " + "<answer>\n";
        output += "     "+ answer + "\n";
        output += " " + "</answer>\n";
        }
    output += "</quiz>";
    console.log(output);
}