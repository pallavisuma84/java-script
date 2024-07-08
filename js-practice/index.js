// console.log('hello world');
// //variables
// var password = $(this).val();
// console.log(password,"====")

////////////////////////////HOISTING//////////////////////////////////

// debugger;
console.log(a,e);
d();
//e()
var a='A';
let b='B';
const c='C';
function d(){
    console.log('D')
}
var e=function(){
    console.log('E')
}
const f=function(){
    console.log('F')
}
e();
f();
//  x=5;
//  console.log(y);
//  const y=8;