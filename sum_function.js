// write a function that recieves an array as args and return their sum
function sum(a){
   let  sum=0
for(let j=0;j<a.length;j++){
    sum += a[j]
}
return sum
}
console.log(sum([70,60,90]))
