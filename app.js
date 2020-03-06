
const mongoose = require('mongoose');

// connects to the mongoDB database server (on 27017)
// And connects to the moongooseFruitsDB (if it doesn't exists, it will create it).
mongoose.connect("mongodb://localhost:27017/mongooseFruitsDB", { useNewUrlParser: true , useUnifiedTopology: true });

// Schema for document collection
const mongooseFruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

// mongoose model (has to follow the structure specified in the schema provided above).
// This is produce a new collection called mongooseFruits (s added by mongoose!).
const MongooseFruit = mongoose.model("mongooseFruit", mongooseFruitSchema);


// Adding multiple documents to the collection
const mongooseFruit = new MongooseFruit ({
  name: "Apple",
  rating: 7,
  review: "An apple a day, keeps the doctor away."
})

const kiwi = new MongooseFruit ({
  name: "Kiwi",
  rating: 7,
  review: "Great fruit"
});

const orange = new MongooseFruit ({
  name: "Orange",
  score: 8,
  review: "Kinda sour"
});

const banana = new MongooseFruit ({
  name: "Banana",
  score: 9,
  review: "Great Stuff!"
});
// document field(s) such as score (instead of rating) that does not follow the Schema
// will not be saved BUT the rest (name and review fields) will be saved
// as it is not a FATAL Error.

//Model.insertMany() - see documentation
MongooseFruit.insertMany([mongooseFruit, kiwi, orange, banana], function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB");
  }
});
