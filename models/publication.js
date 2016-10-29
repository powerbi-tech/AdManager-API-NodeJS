// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema for Publication Collection
var publicationSchema = new mongoose.Schema({
     IsDeleted: Boolean,
    Name: String,
    TypexCD: String,
    LanguagexCD: String,
    CommissionRateForAdvertisments: Number,
    CommisionRateForClassifieds: Number,
	Ratings:Number
});

// Return model
module.exports = restful.model('Publication',publicationSchema);