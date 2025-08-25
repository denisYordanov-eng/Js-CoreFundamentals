function makeObj(arr) {
    if (arr.length === 6) {
        let firstKey = arr[0];
        let firstValue = arr[1];

        let secondKey = arr[2];
        let secondValue = arr[3];

        let thirdKey = arr[4];
        let thirdValue = arr[5];

        let objToPrint = {
            [firstKey]: firstValue,
            [secondKey]: secondValue,
            [thirdKey]: thirdValue,
        };

        return objToPrint;
    }
}
// let objToPrint = {};
//         for (let i = 0; i < 6; i +=2) {
//             let key = arr[i];
//             let value = arr[i + 1];
//             objToPrint[key] = value;
//         }
//         return objToPrint;
// }