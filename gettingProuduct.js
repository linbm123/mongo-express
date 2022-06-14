var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection; //מכיל את כל מה שיש בחיבור
db.on("error", function () {
  console.log("error");
});

db.once("open", function (){ 
  console.log("connected!");
  var productSchema = mongoose.Schema({ id: Number, name: String });

  productSchema.methods.printDetails = function () {
    var str = "id=" + this.id + " name=" + this.name;
    console.log(str);
  };

  Product.find(function (error, products) {
    if (error) {
      console.log(error);
    } else {
      console.log(products);
    }
  });
});
