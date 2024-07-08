/////////////////////////////////importance to local variable////////////////////
let a=10;
value();
function value(){
    let a=20;
    console.log(a);
}
////////////////////////////while printng local variable in global/////////////////////
function check(){
    let b=10;
     b=20;
}
check();
//console.log(b);
/////////////////////////
abc()
function abc(){
    let ab=10;
    ab=20;
    console.log(20);
}
/////////////////////above abc function using arrow function///////////////
//abcd()
const abcd=()=>{
    let d=10;
    d=20;
console.log(20)
}
//////////////////////////what happens when we change const value///////////////
const fruit="apple";
//fruit="mango";
console.log("fruit:"+fruit)
//////////////////////////////what happens when we change const object value/////////////
const employeeDetails={firstName:'pallavi',lastName:"Rambabu",city:'guntur'}
employeeDetails.city="amaravathi";
console.log(employeeDetails);
