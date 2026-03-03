class book{
    title;
    auther;
    pages;
    isAvailable
    count=0
     constructor(){
        this.title= title
        this.auther= auther
        this.pages= pages
        this.isAvailable=true
        
         
    }
    borrow(){

        this.isAvailable=false
    }
    returnBook(){
        this.isAvailable=true
    }
    getInfo(){
        return ` The ${this.title} by ${this.author}(${this.pages} pages)`
    }
    isLongBook(){
        
        if (this.pages>300){
            count++
            return true
        }
        return false
    }
}
let b1=new book('harry potter','the hobbit',300)
let b2=new book('book2','author2',250)
let b3=new book('book3','author3',350)
let b4=new book('book4','author4',310)
let b5=new book('book5','author5',250)
console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getinfo())
console.log(b5.getInfo())
b1.borrow()
b2.borrow()
console.log('the availability of book b1 is: ',b1.isAvailable)
console.log('the availability of book b2 is: ',b2.isAvailable)
b1.returnBook()
console.log("after returning the book ",b1.isAvailable)
