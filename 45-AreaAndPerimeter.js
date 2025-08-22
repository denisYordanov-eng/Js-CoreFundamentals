function findAreaOfRectangle(SideA,SideB){
    function getAreaOfRectangle(SideA,SideB){
        return SideA * SideB;
    }
    function getPerimeterOfRectangle(SideA,SideB){
        return (SideA * 2)  + (SideB * 2);
    }
    console.log(getAreaOfRectangle(SideA,SideB));
    console.log(getPerimeterOfRectangle(SideA,SideB));
}