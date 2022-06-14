const {setupExprees}= require("./setup-express");//תגדיר ותייבא  את הפונקציה 
const {setupMongodb}= require("./setup-mongodb")

setupMongodb();
const app = setupExprees()//מפעיל אותהה



app.listen(3000);