//ASSIGNMENT 2:
//-------------
//You are building a shopping cart summary for an e-commerce website.

//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Tasks:
   // 1. Use filter() to get only inStock products
   const Instock=cart.filter((cartobj)=>cartobj.inStock==true)
   console.log(Instock)
    //2. Use map() to create a new array with:  { name, totalPrice }
    const newArr=cart.map((cartobj)=>{
        let obj={}
       obj.name=cartobj.name
    obj.totalprice=cartobj.price*cartobj.quantity
     return obj  })
    console.log(newArr)
    //3. Use reduce() to calculate grand total cart value
    const grandtotal=cart.reduce((initial,cartobj)=>initial+cartobj.price*cartobj.quantity,0)
    console.log(grandtotal)
   // 4. Use find() to get details of "Mouse"
   const f1=cart.find((cartobj)=>cartobj.name=='Mouse')
   console.log(f1)
    //5. Use findIndex() to find the position of "Keyboard"
    const f2=cart.find((cartobj)=>cartobj.name=='Keyboard')
   console.log(f2)