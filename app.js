
const mongoose = require('mongoose');

// connects to the mongoDB database server (on 27017)
// And connects to the moongooseFruitsDB (if it doesn't exists, it will create it).
mongoose.connect("mongodb://localhost:27017/mongooseFruitsDB", { useNewUrlParser: true , useUnifiedTopology: true });

// Schema for document collection
const mongooseFruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Error! No name specified."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// mongoose model (has to follow the structure specified in the schema provided above).
// This is produce a new collection called mongooseFruits (s added by mongoose!).
const MongooseFruit = mongoose.model("mongooseFruit", mongooseFruitSchema);


// Adding multiple documents to the collection

const mongooseFruit = new MongooseFruit ({
  name: "Peach",
  rating: 8,
  review: "Peaches are great."
});

// const apple = new MongooseFruit ({
//   name: "Apple",
//   rating: 7,
//   review: "An apple a day, keeps the doctor away."
// });
//
// const kiwi = new MongooseFruit ({
//   name: "Kiwi",
//   rating: 7,
//   review: "Great fruit"
// });
//
// const orange = new MongooseFruit ({
//   name: "Orange",
//   score: 8,
//   review: "Kinda sour"
// });
//
// const banana = new MongooseFruit ({
//   name: "Banana",
//   score: 9,
//   review: "Great Stuff!"
// });
// document field(s) such as score (instead of rating) that does not follow the Schema
// will not be saved BUT the rest (name and review fields) will be saved
// as it is not a FATAL Error.


// Add One - instance.save()
mongooseFruit.save();


// Add Many
//Model.insertMany() - see documentation
// MongooseFruit.insertMany([ kiwi, orange, banana], function(err){ //mongooseFruit taken out due to valdation error - see title.
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });


// Reading
// this will read the documents in the "mongooseFruits" collection (if no error)
// MongooseFruit.find(function(err, returnDocs){
//   if (err) {
//     console.log(err);
//   } else {
//
//     returnDocs.forEach( function(returnDoc) {
//       console.log(returnDoc.name)
//     });
//
//     mongoose.connection.close();
//   }
// });
