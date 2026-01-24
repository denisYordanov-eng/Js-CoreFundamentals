function processOddNumbers(arr){
    let oddNumbers = [];
   for (let i = arr.length - 1; i >= 0; i--) {
       if(i % 2 !== 0){
           let currentDoubledNumber = arr[i] * 2;
           oddNumbers.push(currentDoubledNumber);
       }
   }


    console.log(oddNumbers.join(" "));
}
//processOddNumbers([10, 15, 20, 25]);
//processOddNumbers([3, 0, 10, 4, 7, 3]);