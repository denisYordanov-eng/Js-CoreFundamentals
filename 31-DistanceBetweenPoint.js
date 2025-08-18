function findDistanceBetweenPoint(x1, y1, x2, y2) {

    let point1 = {x:x1,y:y1}
    let point2 = {x:x2, y:y2}

    let dx = point2.x - point1.x;
    let dy = point2.y - point1.y;
    return  Math.sqrt(dx * dx + dy * dy);
}
