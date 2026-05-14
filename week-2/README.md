# Week 2 Progress

# Day 3 - JavaScript Array Methods and Hands-on Practice

## Topics Covered

### 1. `filter()` Method
Learned how to filter elements from an array based on conditions.

### Concepts Learned
- Creating a new array using conditions
- Filtering even and odd numbers
- Filtering objects from arrays

### Example
```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
```

---

### 2. `find()` Method
Learned how to find the first matching element in an array.

### Example
```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.find(num => num > 20);

console.log(result);
```

---

### 3. `findIndex()` Method
Studied how to get the index of an element that satisfies a condition.

### Example
```javascript
const numbers = [5, 10, 15, 20];

const index = numbers.findIndex(num => num === 15);

console.log(index);
```

---

### 4. `reduce()` Method
Learned how to reduce an array into a single value.

### Practice Tasks
- Sum of array elements
- Multiplication of numbers
- Finding maximum value

### Example
```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);
```

---

### 5. `map()` Method
Learned how to transform array elements into a new array.

### Example
```javascript
const numbers = [1, 2, 3];

const squared = numbers.map(num => num * num);

console.log(squared);
```

---

## Hands-on Practice

### 1. Application Practice
Worked on small applications using:
- `map()`
- `filter()`
- `reduce()`
- `find()`

---

### 2. Test Practice
Solved coding test questions based on:
- Array methods
- JavaScript logic building
- Functional programming concepts

---

### 3. Validation Questions
Practiced validation programs such as:
- Email validation
- Password validation
- Mobile number validation
- Form input checking

---

# Day 4 - JavaScript Advanced Concepts

## Topics Covered

# 1. Library Book Management System

## Problem Statement
Created a simple Library Book Management System using JavaScript classes.

### Objective
To manage a collection of books in a library using object-oriented programming concepts.

---

## Concepts Learned

### Book Class Creation
```javascript
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
```

### Creating Objects
```javascript
const book1 = new Book("JavaScript Basics", "John");
```

### Managing Book Collection
- Adding books
- Displaying books
- Searching books
- Removing books

---

# 2. Shallow Copy

## Concepts Learned
Copied objects using:
- Spread operator
- `Object.assign()`

### Example
```javascript
const obj1 = { name: "John" };

const obj2 = { ...obj1 };
```

---

# 3. Deep Copy

## Concepts Learned
Created independent copies of nested objects.

### Example
```javascript
const obj1 = {
    name: "John",
    address: {
        city: "Hyderabad"
    }
};

const obj2 = JSON.parse(JSON.stringify(obj1));
```

---

# 4. `setInterval()`

## Concepts Learned
Executed code repeatedly after a fixed time interval.

### Example
```javascript
setInterval(() => {
    console.log("Running every 2 seconds");
}, 2000);
```

---

# 5. `setTimeout()`

## Concepts Learned
Executed code once after a delay.

### Example
```javascript
setTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);
```

---

# Day 5 - Backend Basics and Environment Setup

## Topics Covered

# 1. Introduction to Backend Development

## Learned About
- What is backend development
- Role of servers
- APIs and databases
- Client-server architecture

---

# 2. Environment Setup and Installation

## Installed Tools
- Node.js
- npm (Node Package Manager)
- Visual Studio Code

---

## Commands Practiced

### Check Node.js Version
```bash
node -v
```

### Check npm Version
```bash
npm -v
```

---

# 3. Backend Theory

## Concepts Learned
- Server creation
- Request and response handling
- HTTP methods
  - GET
  - POST
  - PUT
  - DELETE

---

# 4. Creating a Server on Port 4000

## Simple Backend Server Using Node.js

### Example Code
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Server is running successfully");
    res.end();
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});
```

---

# 5. Learning Outcomes

By the end of Week 2:
- Learned important JavaScript array methods
- Improved functional programming skills
- Understood classes and object-oriented programming
- Learned shallow copy and deep copy concepts
- Practiced timers using `setInterval()` and `setTimeout()`
- Gained basic backend development knowledge
- Successfully created a backend server using Node.js
