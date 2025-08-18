function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day);

    date.setDate(date.getDate() + 1 );

    date.toLocaleDateString('en-US')
    let wantedYear = date.getUTCFullYear();
    let wantedMonth = date.getMonth() + 1;
    let wantedDay = date.getDate();
    console.log(`${wantedYear}-${wantedMonth}-${wantedDay}`);
}
