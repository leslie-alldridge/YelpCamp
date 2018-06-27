var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8161/7360193870_cc7945dfea.jpg"},
        {name: "Granite Hill", image: "https://farm3.staticflickr.com/2924/14465824873_026aa469d7.jpg"},
        {name: "Mountain Goats Rest", image: "https://farm4.staticflickr.com/3062/2984119099_82336dfc3b.jpg"}
        ]

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
        
        res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new"); 
});

app.post("/campgrounds", function(req, res){
   //get data from form and add to campgrounds array and redirect back to campgrounds page
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name, image: image}
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp is running");
})