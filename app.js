
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

// constructing a document instance
const mongooseFruit = new MongooseFruit ({
  name: "Apple",
  rating: 7,
  review: "Apple a day, keeps the doctor away"
});

//this will save/add the document(s), in the "mongooseFruits" collection in the
// mongooseFruitsDB databse.
mongooseFruit.save();

// The above is mongoose performing the same action as specified below (in insertDocuments())

// Copied over from FruitsProject which uses MongoDB Native Driver
// Adding new documents/ data to the Database
const insertDocuments = function(db, callback) {
  // Get the collection (or creates the collection)
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 7,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 8,
      review: "Kinda sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great Stuff!"
    }
  ], function(err, result){
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  })
}
