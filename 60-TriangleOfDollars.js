function  makeTriangleOfDollars(row){
    let line = '';
    for (let col = 1; col <= row ; col++) {
        line += '$';
        console.log(line);
    }
}
makeTriangleOfDollars(4);