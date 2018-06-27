var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title and content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - email and name

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



var newUser = new User({
    email: "test2@gmail.com",
    name: "Test mc Test2"
});

newUser.posts.push({
    title: "how to make a potion",
    content: "hello just kidding"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

// var newPost = new Post({
//     title: "reflections on apples",
//     content: "they are delicious"
// });

// newPost.save(function(err, Post){
//     if(err){
//          console.log(err);
//      } else {
//         console.log(Post);
//      }
// });

User.findOne({name: "Test mc Test2"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things i hate",
            content: "apples, apples, apples"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
})