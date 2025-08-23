function calcCompoundInterest(arr){
    let principalSum = arr[0];
    let interestRateInPercent = arr[1];
    let months = arr[2];
    let years = arr[3];

    let interestRate = interestRateInPercent / 100;
    let compoundingFrequency = 12 / months;
    let overallLength = compoundingFrequency  * years;

    let f = principalSum * Math.pow(1 + interestRate / compoundingFrequency,compoundingFrequency * years);
    return f;
}