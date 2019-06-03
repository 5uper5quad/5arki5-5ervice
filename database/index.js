
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homes');

const homeSchema = new mongoose.Schema({
  propertyId: Number,
  imageURL: String,
  description: String
});

const Home = mongoose.model('Home', homeSchema);

let getHomesForServer = function(callback) {
  Home.find(function(err, homes) {
    if (err) {
      console.log('You done goofed!');
    } else {
      callback(homes);
    }
  })
  .limit(50)
  .sort({ 'name': 1});
}

module.exports.getHomesForServer = getHomesForServer;
module.exports.Home = Home;
