function getDayOfTheWeek(inputDayOfTheWeek)
{
    inputDayOfTheWeek = inputDayOfTheWeek.toLowerCase();
    let dayOfTheWeekNumber = 0;

    switch (inputDayOfTheWeek) {
        case "monday":
            dayOfTheWeekNumber = 1;
            break;
        case "tuesday":
            dayOfTheWeekNumber = 2;
            break;
        case "wednesday":
            dayOfTheWeekNumber = 3;
            break;
        case "thursday":
            dayOfTheWeekNumber = 4;
            break;
        case "friday":
            dayOfTheWeekNumber = 5;
            break;
        case "saturday":
            dayOfTheWeekNumber = 6;
            break;
        case "sunday":
            dayOfTheWeekNumber = 7;
            break;
        default:
            console.log("error");
            return ;
    }
    console.log(dayOfTheWeekNumber);
}

getDayOfTheWeek("Monday");