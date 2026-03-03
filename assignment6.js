//ASSIGNMENT 5: 
//-------------
//Bank Transaction Analyzer

//You are building a bank statement summary.

//Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "credit", amount: 3000 }
];


//Tasks:
   // 1. filter() all credit transactions
   let filt=transactions.filter((transobj)=>transobj.type=='credit')
   console.log(filt)
    //2. map() to extract only transaction amounts
    let filt2=transactions.map((transobj)=>{
        if (transobj.type=='credit'||transobj.type=='debit'){
            return transobj
        }
        else{
            return 
        }
        })
    console.log(filt2)

    //3. reduce() to calculate final account balance
    let FinalA=transactions.reduce((Iamount,transobj)=>(Iamount+transobj.amount),0)
    console.log(FinalA)
    //4. find() the first debit transaction
    let dT=transactions.find((transobj)=>transobj.type=='debit')
    console.log(dT)
    //5. findIndex() of transaction with amount 10000
    let IE=transactions.findIndex((transobj)=>transobj.amount==10000)
    console.log(IE)