function totalSumWithDDS(input){

    //calculate sum without vat.
    let sum = 0;
    for(let product of input){
        sum += product;
    }


    //calculate vat.
    let vat = sum * 0.2;

    //calculate total sum plus vat.
    let totalSum = sum + vat;


    //print output.

    console.log(`sum = ${sum}`);
    console.log(`VАТ ${vat}`);
    console.log(`total = ${totalSum}`);
}