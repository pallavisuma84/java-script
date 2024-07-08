//////////regular function///////function declaration/////////////////
function greet(){
    console.log("hello good morning");
}
greet();
///////////////////////////function expression///////////
let addition=function(){console.log('hello')}()
////////////////////////////////////////////////////////////
var x=argumentChecker(1,2,5,7,18,0,98,97,19,20)
function argumentChecker(){
    let argLength = arguments.length;
    console.log("no.o arguments:",argLength);
}
////////////////////////////////////////
// const findLengthOfArguments=(a,b,c)=>{
//     console.log(arguments.length)
// }
// findLengthOfArguments(1,'ddd')

////////////////////////////////////////////////to check lexical environment via nested functions////////////////
function a(){
    var b=10;
    function c(){
        console.log(b);
    };
    c();
}
a();