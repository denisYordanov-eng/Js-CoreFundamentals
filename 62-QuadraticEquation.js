function calculateQuadraticEquation(a,b,c){
  let d= Math.pow(b,2) - (4 * a * c);

    let negativeB = b * -1;
    if(d > 0){
        let x1 =  (negativeB - Math.sqrt(d)) / (2 * a);
        let x2 = (negativeB + Math.sqrt(d)) / (2 * a);

      console.log (x1);
      console.log (x2);
  }else if(d === 0){
      //x = -b / (2*a) = 12 / 2 = 6
      let x = negativeB / (2 *a);
      console.log(x);
  }else {
        console.log("No")
    }

}