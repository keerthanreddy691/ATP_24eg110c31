// write a funtion that receives 3 number args and return the big number 
function big(a,b,c){
    if(a>b && a>c)
{
    return a
}
else if(b>c){
    return b
}
else{
   return c
}
}
let result=big(6,7,10)
console.log(result)