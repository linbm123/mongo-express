const mongoose = require("mongoose");

function setupMongodb() {
  console.log("setup mongo");
  mongoose.connect(
    "mongodb+srv://linbenmoyal:linbenmoyal@cluster0.gmxmy.mongodb.net/?retryWrites=true&w=majority"
  );
  var db = mongoose.connection; //מכיל את כל מה שיש בחיבור

  db.on("error", function () {
    console.log("error");
  });

  db.once("open", function () {
    console.log("connected!");
  });
}

module.exports = {
  //אתם יכולים להשתמש רק בפונקציות שרשומות כאן
  setupMongodb: setupMongodb,
};
