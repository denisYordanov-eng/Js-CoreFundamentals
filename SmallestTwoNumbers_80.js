function smallestTwoNumbers_80(arr) {
    console.log(arr.sort((a, b) => a - b)
        .slice(0,2)
        .join(" "));
}
//smallestTwoNumbers_80([30, 15, 50, 5]);
//smallestTwoNumbers_80([3, 0, 10, 4, 7, 3]);