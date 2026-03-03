//ASSIGNMENT 3:
//-------------
//Employee Payroll Processor

//You are building a salary processing module in a company HR app.

//Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
    //1. filter() employees from IT department
    let dept=employees.filter((empobj)=>empobj.department=='IT')
   console.log(dept)
  //  2. map() to add:
            //netSalary = salary + 10% bonus
let add=employees.map((empobj)=>{
    empobj.netsalary=empobj.salary+empobj.salary*0.01
return empobj})
console.log(add)
    //3. reduce() to calculate total salary payout
 let TSP=employees.reduce((add,empobj)=>add+empobj.salary,0)
 console.log(TSP)
    //4. find() employee with salary 30000
let FS=employees.find((empobj)=>empobj.salary==30000)
console.log(FS)
    //5. findIndex() of employee "Neha"
    let indexN=employees.findIndex((empobj)=>empobj.name=='Neha')
    console.log(indexN)