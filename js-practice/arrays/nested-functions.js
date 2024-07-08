var greeting="Good Morning!!";
console.log("greeting: "+greeting);
var fun1=function(){
    var greeting="Good Afternoon"
    console.log("greeting: "+greeting +"I am from function 1");
     function fun2(){
         console.log("greeting:" +greeting +"I am from function 2")
     }
      fun2();
}
fun1();
// function fun2(){
//     console.log("greeting::"+greeting +"I am from funtion 2")
// }
// fun2();



