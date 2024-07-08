let empObject={
    empName:"pallavi",
    empId:1234,
    empSalary:233
}
console.log("employee details:" +"\n"
 +"employee name:"+empObject.empName  +"\n"
 +"employee Id:" +empObject.empId);////////////object properties are accessed by using dot operator

 empObject.empName="pallavi Rambabu"//replacing or changing name
 console.log("employee name after changing:"+empObject.empName);

 delete empObject.empSalary;
//  console.log("after deleting employee salary:"+empSalary);
let studentObject={
    'first name':"pallavi",
    'last name':"rambabu",
     percentage:71
}
console.log("students details:" +"\n"
+"student first name:" +studentObject["first name"] +"\n"///we cant access multi property name(first name)using dot 
+"student last name:" +studentObject["last name"] +"\n"//for that we are using square brackets
+"student percentage:" +studentObject.percentage//dot operator is fine  only for perfect ones 
);
///////////////////////////////////difference between dot and square brackets notatins////////////////////
let name='first name'
console.log(studentObject.name);//using dot operator we  cannot access variables as keys
console.log(studentObject[name]);//by using square brackets ,allows us to use variable as key