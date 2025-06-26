const express = require("express");
const app = express();

// Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
// The captured values are populated in the (req.params) object, with the name of the route parameter specified in the path as their respective keys.

// Getting Route Params 👇🏻
// app.get("/student/delete/:id", (req, res) => {
//   console.log(req.params);
//   const { id } = req.params;
//   res.send(`Student No: ${req.params.id} delete.`);
// });

// Destructuring Route Params 📦
// app.get("/student/delete/:id", (req, res) => {
//   const { id } = req.params;
//   console.log("Student Id: ", req.params.id);
//   res.send(`Student No: ${id} delete.`);
// });

// Passing Multiple Route Params 🤹🏻‍♂️
// app.get("/product/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   console.log(`Product: ${req.params.category} - (${req.params.id})`);
//   res.send(`Product Category: (${category}), Product Id:(${id})`);
// });

// Complexcity 😵
// app.get("/product/order/:day/:month/and/:year", (req,res)=>{
//   const{day,month,year} = req.params
//   console.log(`Date Of Order: ${req.params.day}/${req.params.month}/${req.params.year}`);
//   res.send(`Product was ordered on: ${day}/${month}/${year}`)
// })

// -------------------------
// The app.params() function is used to add the callback triggers to route parameters.
// It is commonly used to check for the existence of the data requested related to the route param.
// app.param(name, callback)

app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

// This code will not work 👇🏻
// app.param("year", (req, res, next, year) => {
//   console.log(`Year: ${year}`);
//   next();
// });

app.get("/user/:id", (req,res)=>{
  console.log("This is User ID Path");
  res.send("Response OK")
})

// ------------

app.listen(7007, () => console.log("Server UP on http://localhost:7007"));
