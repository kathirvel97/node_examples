var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b)
{
    console.log("Solving for rectangle, l="+ l + "b= "+ b);
    if(l<=0||b<=0)
    {
        console.log("Dimensions not possible");
    }
    else{
        console.log("The area is " + rect.area(l,b));
        console.log("The perimeter is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
