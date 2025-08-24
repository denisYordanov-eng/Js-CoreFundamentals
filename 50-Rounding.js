function roundANumber(arr){
    let num= arr[0];
    let precision = arr[1];

    if (precision >15){
        precision = 15;
    }

    let multiplier = Math.pow(10, precision);
    let result = Math.round(num * multiplier) / multiplier;
    return result;
}