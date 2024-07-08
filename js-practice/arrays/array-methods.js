let arr=[5,90,1,8,0,6]
arr.splice(0,3)///removing elements using splice
console.log("after splice:"+arr);
arr.push(1,90,84);
console.log("array elements:"+arr);
arr.splice(1,3,"pallavi","cg","suma");//deleting and replacing using splice
console.log("after deleting and replacing the array elements:"+arr);
console.log("slice method:"+arr.slice(1,4))//displays elements using slice
let arr1=[1,6,44,8,20]
let arrowFun=arr1.filter((arr1) => arr1%2==0)//arrow function+filter
console.log("filtered array:"+arrowFun); 
let strArr=["pallavi","srungavarapu","suma"];
let strLen=strArr.map((ele)=>ele.length)////map is used to return multiple values based on given array
console.log("after mapping the lengths are:"+strLen);
console.log("after reducing:"+arr1.reduce(//similar to map but reduce returns single value bases on array
    (sum,current)=>sum+current
));
