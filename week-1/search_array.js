// write a funtion that recieves an array & search elements as args and returns the index of that search element in array.it should return "not found "
function find(a,n){
    for (let i=0;i<a.length;i++){
        if(a[i]==n){
            return i}
        
    }
    return "not found"
}
let result=find([60,70,80,45],45)
console.log(result)