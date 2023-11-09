// Write a JavaScript program 
// to find the area of a triangle where three sides are 5, 6, 7.
function triangleArea(a,b,c){
    // Area of trianle if 3 sides given
    // Area=(s(s-a)(s-b)(s-c))
    // where a,b,c are sides of triangle
    // s=(a+b+c)/2
    let s=(a+b+c)/2;
    let area=Math.floor(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
    return area;
}
console.log(triangleArea(5,6,7));