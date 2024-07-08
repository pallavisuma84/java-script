let arr1=[1,2];
let arr2=[arr1,3,4,5];
console.log("elements of array1:",arr1)

console.log("elements of array2:",arr2)
////////////////////////////////////////////copy of array using spread operator////////////////////////////////////////////////
let array=[3,4,2]
let array1=[...array]
console.log("elements of first array:",array)
console.log("elements of copied array:",array1)
//////////////////////////////////////////////concatenating 2 arrays///////////////////////////////////////////////
let arr=[1,2]
let ar=[3,4]
let array3=[...arr,...ar]
console.log("after concatenating the eleents in array",array3)
////////////////////////////////////////////////////////////spread operator in object//////////////////////////////
let person={name:'pallavi',age:'23'}
let personDetails={...person}
console.log(personDetails)
let addPersonDetails={...personDetails,city:'Guntur'}
console.log(addPersonDetails)
////////////////////////////////////////////////////concatenating objects using spread operator//////////////////////////
let employee={employeeName:'pallavi',designation:'software engineer'}
let employeeAddress={baseLocation:'Hyderabad',currentLocation:'Banglore'}
let employeeDetails={...employee,...employeeAddress}
console.log("employee details:",employeeDetails)
////////////////////////spread operator with functions////////////////////////////
function add(a,b,c){
    return a+b+c;

}
let numbers=[1,2,3];
console.log(add(...numbers))
