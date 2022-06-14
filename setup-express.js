const express = require("express"); //


function setupExprees() {
  const app = express(); //הגדרת שרת

  app.use(express.json());

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
    console.log("body:", req.body);
    res.send("Hello World post users");
  });

  console.log("my app is listinning");
  return app;
}

module.exports = {
  setupExprees: setupExprees,
};
