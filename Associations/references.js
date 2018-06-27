var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");



Post.create({
  title: "How to cook the best",
  content: "AKLSa"
}, function(err, post){
    User.findOne({name: "big bob"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// User.create({
//     email: "bo@gmail.com",
//     name: "big bob"
// });

// User.findOne({name:"big bob"}).populate("posts").exec(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });