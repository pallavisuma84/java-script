// let puppyNames=['snoopy','jimmy','tommy'];
// console.log(puppyNames);
// ////////push////////inserts element at the end of an array
// console.log(puppyNames.push('candy'));
// let puppet=puppyNames.push('browny')
// console.log(puppet)
// console.log(puppyNames)

// ///////pop//////////deletes last element
// console.log(puppyNames.pop());
// let pups=puppyNames.pop();
// console.log(pups)

// // ///////shift///////////deletes first element
// // puppyNames.shift()
// // console.log(puppyNames);
// // ////////unshift//////////inserts starting position o an array
// // puppyNames.unshift('candy');
// // console.log(puppyNames);
// // ///////////slice//////////////coies array into new array.doesnt affect original array
// // let puppies=puppyNames.slice();
// // console.log(puppies);
// // console.log(puppyNames);
// // puppies.pop()
// // console.log(puppies);
// // console.log(puppyNames);
// let fruits=['apple','banana','orange','grapes','kiwi']
// let f=fruits.slice()
// console.log(f)
// console.log(fruits.slice(1,4))
// // /////////////splice//////////
// // let pup=puppyNames.splice(1,2)//deleting using splice
// // console.log(pup);
// // console.log(puppyNames);//affecting the original array
// // pup.splice(0,0,'browny')//adding using splice
// // console.log(pup);
// // ///////////////map///////////////////////
// // let num=[]

// // console.log(num.pop())
// const family=[{
//     name:'rambabu',
//     age:45
// },
// {
//     name:'pallavi',
//     age:23
// },{
//     name:'padma',
//     age:43
// },{
//     name:'tk',
//     age:23
// }]
// console.log(family.filter((f,i)=>f.age>40))//filter
// console.log(family)
// /////////////////////////
// let numbers=[1,2,3,4,5]
// console.log(numbers.map((n,i)=>n*2));
// console.log(numbers)
// console.log(numbers.forEach((num,i)=>num*2))
// /////////////////////some///////////////////
// console.log(numbers.some((e,i)=>e>5))
// //////////////////find/////////////
// console.log(family.find((fam,i)=>fam.age===45))
// console.log(family)
// ///////////////////findIndex()////////////
// console.log(family.indexOf((fam,index)=>fam.age===23))
// /////////////////////////reduce/////////////////////
// let total=family.reduce((acc,f)=>{{acc=acc+f.age}
// return(acc)},0)
// console.log(total)
let employees = [
    {'empcode':'E001', 'fname':'Sujit', 'lname':'Kapoor', 'salary':19000, 'expirience':2 },
    {'empcode':'E002', 'fname':'Dinesh', 'lname':'Chaohan', 'salary':5000, 'expirience':2.5 },
    {'empcode':'E020', 'fname':'Vishal', 'lname':'Arjuna', 'salary':9000, 'expirience':1 },
    {'empcode':'E018', 'fname':'Tushar', 'lname':'Shah', 'salary':11000, 'expirience':2 },
    {'empcode':'E003', 'fname':'Nitin', 'lname':'Kulkarni', 'salary':23000, 'expirience':8 },
    {'empcode':'E015', 'fname':'Yogesh', 'lname':'Joshi', 'salary':14000, 'expirience':5 },
    {'empcode':'E017', 'fname':'Kapil', 'lname':'Patel', 'salary':11000, 'expirience':1 }
  ]
console.log(employees.filter((item)=>item.salary>=11000&&item.salary<=17000))
// let empExp=employees.filter((item)=>{item.expirience===1||item.salary>=2.5})
// console.log(empExp)

// console.log(employees.filter((item)=>item.empcode.endwith(15||17)))


