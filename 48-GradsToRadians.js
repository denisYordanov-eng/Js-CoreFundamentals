function  convertGradsToRadians(grad) {
    grad = grad % 400;
    let radians = grad * 0.9;
    let degreeOutput = 0;
    if (radians > 0){
        degreeOutput = radians;
    }else if(radians < 0){
        degreeOutput = radians + 360;
    }
    console.log(degreeOutput);
}