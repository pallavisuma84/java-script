// var x=4, y=4;
// if(x==y)
// {
//     console.log("x and y are")
// }
/////////////////////////////////////////String Concatination//////////////////////////////////////////////
var message="hello"
message += " world!!"
//message=message+world
console.log("message:"+message);

////////////////////////////////////////Regular Math Operators/////////////////////////////////////////////
console.log((4+5)/3);//presedence for paranthesis ,so it calculate 4+5 and then /3
console.log(undefined/3)//returns NaN means Not A Number
function fun1(a){
    console.log(a/5);
//invoking function with out passing arguments

}
fun1()

///////////////////////////////////////////usage of ==////////////////////////////////////////////////
var x="4", y=4//here x is string and y is number
if(x==y)
{
    console.log("x is equal to y")   //this will prints,because js automatically converts one to another which is called coercion.
}
else{
    console.log("x is not equal to y")
}////////////////to restrict this conversion we use ===
///////////////////////////////////////////////////usage of ===(Strict Equality)////////////////////////////////////////////
var x="4", y=4
if(x===y)///first checks x and y are same data type or not,if not it doesnt compare 
{
    console.log("Restrict:x is equal to y")
}
else{
    console.log("Restrict:x is not equal to y")
}


