// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema for Client Collection
var clientSchema = new mongoose.Schema({
     IsDeleted: Boolean,
        FirstName: String,
		MiddleName: String,
        LastName:String,
        Mobile:String,
        Email:String,
		MobileNumber:String,
		Address:String,
		ClientTypexCD:String
});

// Return model
module.exports = restful.model('Client',clientSchema);