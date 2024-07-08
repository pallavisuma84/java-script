let accountDetails={}
console.log(typeof accountDetails)
const employeeDetails={
    firstName: 'pallavi',
    lastName: 'Rambabu',
    age: 22,
    'org name' :'cg'
}
console.log(typeof employeeDetails.age)
console.log(employeeDetails.firstName)
console.log(employeeDetails['firstName'])
console.log(employeeDetails['org name'])
console.log(employeeDetails)
//employeeDetails.city='Guntur'//adding property to  current object
//console.log(employeeDetails)
//const x=employeeDetails;///x is not a copy of object
//console.log(x)
//x.city="Amaravathi";///replacing city
//console.log(x)