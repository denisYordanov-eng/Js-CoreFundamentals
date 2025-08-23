function calcDistance(input) {
    let obj1Speed = input[0];
    let obj2Speed = input[1];
    let seconds= input[2];

let speedInSecondsObj1 =(obj1Speed * 1000) / 3600;
let speedInSecondsObj2 =(obj2Speed * 1000) / 3600;

    let obj1Distance = speedInSecondsObj1 *  seconds;
    let obj2Distance = speedInSecondsObj2 *  seconds;

    let delta = Math.abs(obj1Distance - obj2Distance);
    console.log(delta);
}
