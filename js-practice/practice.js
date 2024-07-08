///////////////////////REMOVE DUPLICATE NUMBERS///////////////////////////
let numbers=[8,5,5,2,8,6,1,7,8,4]
for(let i=0;i<=numbers.length;i++){
    if(numbers.indexOf(numbers[i])!==numbers.lastIndexOf(numbers[i])){
        delete(numbers[i])
        
    }
}
console.log(numbers)
////////////////REMOVING NEGATIVE NUMBERS////////////////////////////
let nums=[-5,8,0,-4,7,19,6]
let negativeNums=nums.filter((e,i)=>e<0)
console.log(negativeNums);
////////////////////PRINTING MAX OCCURED CHARACTER IN STRING & COUNT OF REPETITION/////////////////
function maxCharacter(name){
    let count={
       
    }
    let char=name.split('')
    console.log(char)
   char.forEach(element => {count[element]=count[element]+1 ||1
    });//it checks whether the character is already there or not,if there it adds 1 to existing number,else 1
    console.log(count)
    let maxCharacter='';
    let maxOccured=1;
    for(key in count){
        if(count[key]>maxOccured){
            maxOccured=count[key],
            maxCharacter=key;
        }
    }
    return maxCharacter;
}
console.log(maxCharacter('apple'));
/////////////////////////////////////RECURSIVE FUNCTION FOR TABLE/////////////////
function mul_table(n,i){
    if(i>10){
        return;
    }
    
     console.log(i + "*" + n +"=" + n*i)   
     
    mul_table(n,i+1);
}
mul_table(7,1);
///////////////////////////////COUNT OF REPETITION///////////////////////////////
let array=['snoopy','browny','candy','tommy','candy','candy']
let countobj={}
array.forEach((element)=>{countobj[element]=countobj[element]+1||1})
console.log(countobj);