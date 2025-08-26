function findTheLastDayOfPreviousMonth(arr) {
    let day = arr[0];
    let month = arr[1];
    let year = arr[2];

    let wantedDate = new Date(year, month - 1, 0);

    console.log(wantedDate.getDate());
}
findTheLastDayOfPreviousMonth([17, 3, 2002]);