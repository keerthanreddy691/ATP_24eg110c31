//ASSIGNMENT 2:
//-------------
//Student Performance Dashboard

//You are working on a college result analysis system.

//Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Tasks:
   // 1. filter() students who passed (marks ≥ 40)
   let pass=students.filter((studobj)=>studobj.marks>=48)
   console.log(pass)
   // 2. map() to add a grade field
             // ≥90 → A
             // ≥75 → B
             // ≥60 → C
             // else → D
const grade1=students.map((studobj)=>{
    if(studobj.marks>=90){
         studobj.grade='A'
         return studobj
    }
    else if(studobj.marks>=75){
        studobj.grade='B'
        return studobj
    }
    else if(studobj.marks>=60){
         studobj.grade='C'
         return studobj
    }
    else{
        studobj.grade='D'
        return studobj
    }
    
})
console.log(grade1)
   //3. reduce() to calculate average marks
   let avg=students.reduce((avg,studobj)=>(avg+studobj.marks),0)
   console.log(avg/students.length)
   //4. find() the student who scored 92
   let f1=students.find((studobj)=>studobj.marks==92)
   console.log(f1)
   //5. findIndex() of student "Kiran"
   let fI=students.findIndex((studobj)=>studobj.name=='Kiran')
   console.log(fI)