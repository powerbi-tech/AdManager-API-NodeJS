// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema for Client Collection
var clientSchema = new mongoose.Schema({
     IsDeleted: Boolean,
        FirstName: String,
        LastName:String,
        Mobile:String,
        Email:String,
});

// Return model
module.exports = restful.model('Client',clientSchema);