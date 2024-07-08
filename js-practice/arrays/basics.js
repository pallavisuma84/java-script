////////////////////////////////Length of the String///////////////////////////////////////
var firstname='pallavi' , firstnamelen=0;
firstnamelen=firstname.length;
console.log("length of given string:"+firstnamelen)
///////////////////////////////String Concatenation////////////////////////////////////////
var name=' srungavarapu';
firstname+=name;
console.log(firstname);
//////////////////////////////Bracket Notation/////////////////////////////////////////////
firstLetterofFirstName=firstname[0]
console.log(firstLetterofFirstName)
//////////////////////////Bracket Notation for getting last letter in string/////////////////////
var lastLetter=" ",lastThirdLetter=" "
lastLetter=firstname[firstname.length -1]
console.log("last letter : "+lastLetter);
lastThirdLetter=firstname[firstname.length -3]
console.log("last third letter:"+lastThirdLetter);//returns last third letter

//////////////////////////////Immutability of Strings//////////////////////////////////////
var message="iello world "//didnt allow to change letter at particular index,but allows to change whole string
message[0]="h"//changing i to h ,but it will show error
message="hello world";
console.log("message: "+message);
////////////////////////////////////Arrays////////////////////////////////////////////////////
var numArr=[50,20,10]
var strArr=["pallavi","rambabu"]
var newArr=[numArr[0],strArr]
console.log("new array: "+newArr)
//////////////////////////////////////Multi Dimensional Array/////////////////////////////////////////
var arr=[[3,4,2],[8,5,2],[[9,4,1],5]]
var arr1=arr[0][1]
console.log(arr1)
console.log(arr[2][0][0])
//////////////////////////////////////Array Operations///////////////////////////////////////////////
var array=[5,8,99];
array.push(0,14,19)//////////pushes top of the array
console.log("after pushing into array:" +array)
console.log(array.pop())
//////////////////////////////////////pop///////////////////////////////////////
var popArr=[1,9,10,15]
var removedElement=popArr.pop();///////////////////deletes last element
console.log(removedElement)
//////////////////////////////////shift///////////////////////////////////
console.log("before shifting the array is:" +popArr)
console.log("shifting element:" +popArr.shift())//////////deletes first element,reverse to pop
console.log("after shifting the array is:" +popArr)
/////////////////////////////////unshift//////////////////////////////////////
console.log("before unshifting:" +popArr)
console.log("unshifing:" +popArr.unshift(73))/////////inserts element to satrting positing of array
console.log("after unshifting:" +popArr)
////////////////////////////////////FUNCTIONS////////////////////////////////////////////
function msg()
{
    console.log("hello world!!");
}
msg();//invoking msg function
/////////////////////////////////PASSING VALUES TO FUNCTION/////////////////////////////
function add(x,y)
{
    console.log("result:"+(x+y))
}
add(2,3);/////passing values to add function
///////////////////////////////////////GLOBAL SCOPE VARIABLES/////////////////////////////
var myGlobalVar=20;
function fun1()
{
    var myvar=5;
}
function checking()
{
    if(typeof myGlobalVar != undefined)
    {
        console.log("myGlobalVar is global variable");
    }
    // if(typeof myvar != undefined)
    // {
    //     console.log("value of myvar:" + myvar);
    // }
    
}

checking();
//////////////////////prsedence to local variables/////////////
var myOutfit="T-shirt";
function outfitName()
{
    var myOutfit="sweater";//if the name of variable is same and if we call the function,it returns local variable..precedence given to local variable
    return myOutfit;
}
console.log("my outfit name:"+outfitName());
////////////////////returning value from function/////////
function add(num){
    return num+num;
}
console.log("sum of passing number:"+add(5));
///////////////without return/////////
function sub(n){
    n-5;//if we didnt give return it returns undefined
}
console.log("subtraction of passing number:"+sub(4));
/////////////////////assigning returned variable///////////
var changed=0;
function change(number)
{
    return (number+10)/2;
}
changed=change(5);
console.log("changed variable value:" +changed);
