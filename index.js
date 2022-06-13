const express = require("express");
const app = express();

app.use(express.json())

app.get("/", function (req, res) {
  console.log("hey");
  res.send("Hello World");
});

app.get("/users", function (req, res) {
  //   res.send('Hello World')
  console.log("users");
  res.send("Hello World users");
});


app.post("/users", function (req, res) {
   
    // console.log("post users", req);
    console.log("body:",req.body)
    res.send("Hello World post users");
  });

console.log("my app is listinning")
 app.listen(3000);
  