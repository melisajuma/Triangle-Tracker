function triangle() {
var a=parseInt(document.getElementById("a").value);
var b=parseInt(document.getElementById("b").value);
var c=parseInt(document.getElementById("c").value);
if (a<=0 || b<=0 || c<=0){
    alert("Kindly check your values!");
}else if (a===b && b===c && c===a) {
    alert( "This is an equilateral triangle!");
}else if (a+b<=c || b+c<=a || a+c<=b) {>>?
    alert("Triangle CANNOT be formed!");
}else if (a==b || b==c || c==a) {
    alert ( "This is an isosceles triangle!");
} else if (!(a+b<=c || b+c<=a || a+c<=b ) && !(a===b && b===c && c===a)) {
    alert("This is a scalene triangle!");
} 
}