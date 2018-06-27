var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to DB
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// george.save(function(err, cat){
//   if(err){
//       console.log("Something went wrong")
//   } else {
//         console.log("We just saved a cat to the DB")
//         console.log(cat);
//   }
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Kind"
}, function(err, cat){
    if(err) {
        console.log("oops");
    } else {
        console.log("created");
    }
});

//retrive all cats from DB and console log them

Cat.find({}, function(err, cats){
   if(err) {
       console.log("error");
   } else {
       console.log("all the cats.");
       console.log(cats);
   }
});