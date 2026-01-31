function getValidityChecker(arr) {
    let x1 = arr[0];
    let y1 = arr[1];

    let x2 = arr[2];
    let y2 = arr[3];

    function check(x1, y1, x2, y2) {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2);
}


//getValidityChecker([3, 0, 0, 4]);
//getValidityChecker([2, 1, 1, 1]);