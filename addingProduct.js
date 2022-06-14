const mongoose = require("mongoose");
const http = require("http");
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;
db.on("error", function () {//כל שגיאה שתיהיה תפעיל את הפונקציה
  console.log("error");
});

db.once("open", function () {//אם החיבור הצליח פעם אחת תפעיל לי אחרי זזה כבר לא 
  console.log("connected!");
  const productSchema = mongoose.Schema({ id: Number, name: String });
  productSchema.methods.printDetails = function () {
    var str = "id=" + this.id + " name=" + this.name;
    console.log(str);
  };

  var Product = mongoose.model("products", productSchema);

  var carpeta = new Product({ id: 123123, name: "carpetax" });
  var tabola = new Product({ id: 432343, name: "Tabolala" });

  carpeta.save(function (error, prod) {
    if (error) {
      console.log(error);
    } else {
      console.log("carpeta was saved to mongodb");
      carpeta.printDetails();
    }
  });

  tabola.save(function (error, prod) {
    if (error) {
      console.log(error);
    } else {
      console.log("tabola was saved to mongodb");
      tabola.printDetails();
    }
  });
});
