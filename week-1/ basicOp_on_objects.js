const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  }]
  
  
//Insert new Emp at 2nd position
employees.splice(2,0,{eno:102,name:"arun",marks:[55,67,89]})
console.log(employees)
//Remove an emp with name "Kiran"
let count=0
for(let i of employees){
    
    if(i.name=="Kiran"){
       break
    
    }
   ++count
}
console.log(count)
employees.splice(count,1)
console.log(employees)
//Change the last mark 95 to 75 of emp  "Sneha

for(let i of employees){
    
    if(i.name=="Sneha"){
      i.marks.splice(2,1,75)
    
    }
    
}

console.log(employees)
