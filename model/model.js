var mongoose = require ('mongoose');
var reservationSchema = mongoose.Schema({
    Make: String,
    Model : String,
    Year : Number,
    Type : String,
    Features :[String],
    PurchaseDate : Date
      });
   module.exports.Consumer = mongoose.model('databasecar', reservationSchema);