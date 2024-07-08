function numbers(...args){
    console.log(args)
}
numbers(1,2,3,4,5)
///////////////////////////////////////////////////////////////
function array(a,b,...rest){
    console.log("a value is:",a)
    console.log("b value is:",b)
    console.log("rest value is:",rest)

}
array(1,2,3,4,'pallavi','rambabu')
///////////////////////////////////////////////////////////
function sum(...args){
    let result=0;
    for (let arg of args){
        result=result+arg;
    }
    console.log("result after sum:",result)
}
sum(1,2,3)
sum(1,2,3,4,5,6)
