//Assignment 1: Daily Temperature Analyzer
//----------------------------------------
//Scenario : You are analyzing daily temperatures recorded by a weather app.

//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//Tasks:
   // 1. filter() temperatures above 35
   let s=temperatures.filter((elements)=>elements>35)
   // selects data greater than 35
  console.log(s)
    //2. map() to convert all temperatures from Celsius → Fahrenheit
    const c=temperatures.map((elements)=>elements*(9/5)+32)
    console.log(c)
    //3. reduce() to calculate average temperature
    const a=temperatures.reduce((avg,element)=>(avg+element))
 
 console.log(a/temperatures.length)
   // 4. find() first temperature above 40
   let f1=temperatures.find((element)=>element>40)
   console.log(f1)

    //5. findIndex() of temperature 28
    let fI=temperatures.findIndex((element)=>element==28)
    console.log(fI)