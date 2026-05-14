
# Day 7 - Backend Development and MongoDB Basics

## Topics Covered

# 1. Running Server with a Port Number

## Concepts Learned
Learned how to create and run a backend server using Node.js.

### Example
```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Server is running");
    res.end();
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});
```

---

# 2. Creating APIs

## Concepts Learned
Understood how APIs help frontend and backend communicate with each other.

### API Methods Practiced
- GET
- POST
- PUT
- DELETE

### Simple API Example
```javascript
app.get("/products", (req, res) => {
    res.send("Fetching Products");
});
```

---

# 3. CRUD Operations

## CRUD Meaning
- Create
- Read
- Update
- Delete

Learned how to perform CRUD operations using backend APIs.

---

# 4. Introduction to MongoDB

## Concepts Learned
- What is MongoDB
- NoSQL Database basics
- Collections and Documents
- Storing data in JSON format

---

## MongoDB Operations Practiced
- Insert data
- Read data
- Update data
- Delete data

---

# Backend Application Development

## Created a Backend Application

Developed a simple product management backend application using:
- Node.js
- Express.js
- MongoDB

---

# Product Details Used

Each product contains:
- Product Name
- Product Price
- Product Quantity

### Example Product Object
```javascript
{
    name: "Laptop",
    price: 50000,
    quantity: 2
}
```

---

# Testing Using React Client

## Frontend Testing
Connected backend APIs with React frontend application for testing.

---

# CRUD Functionalities Implemented

## 1. Creating a Product

### API Used
```javascript
POST /products
```

### Functionality
Added new products with:
- Name
- Price
- Quantity

---

## 2. Reading Product by ID

### API Used
```javascript
GET /products/:id
```

### Functionality
Fetched a single product using product ID.

---

## 3. Reading All Products

### API Used
```javascript
GET /products
```

### Functionality
Fetched all available products from database.

---

## 4. Updating Product

### API Used
```javascript
PUT /products/:id
```

### Functionality
Updated:
- Product Name
- Product Price
- Product Quantity

---

## 5. Deleting Product

### API Used
```javascript
DELETE /products/:id
```

### Functionality
Removed products from database using product ID.

---

# Learning Outcomes

By the end of Day 7:
- Learned how to run backend servers
- Understood API creation process
- Practiced CRUD operations
- Gained basic knowledge of MongoDB
- Developed a backend application
- Connected backend with React frontend
- Successfully tested APIs using React Client
