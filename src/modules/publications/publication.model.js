import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import auditingSchema from '../core/base.model'

const PublicationSchema = new auditingSchema({
  // Schema Specific Fields
  publicationGroup: {
    type: String,
  },
  publicationName: {
    type: String,
    required: 'Please provide Publication Name',
    unique: true,
  },
  publicationType: {
    type: String,
    enum: ['Local_Daily', 'National_Daily', 'Sunday_Only'],
  },
  languageType: {
    type: String,
    enum: ['English', 'Hindi', 'Konkani', 'Marathi'],
  },
  ratings: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1,
  },
  // ad Data
  ads: {
    commissionRate: Number,
  },
  //Classifieds Data
  classifieds: {
    commissionRate: Number,
    schemes: [
      {
        type: Schema.ObjectId,
        ref: 'ClassifiedScheme',
      },
    ],
    rates: [
      {
        type: Schema.ObjectId,
        ref: 'ClassifiedRate',
      },
    ],
  },
})

PublicationSchema.plugin(uniqueValidator, {
  message: 'Publication with name : "{VALUE}" already exists in system',
})

PublicationSchema.pre('validate', function(next) {
  next()
})

PublicationSchema.methods = {
  /* Model Instance Methods come here */
}

PublicationSchema.statics = {
  /* Model Methods come here */
}

export default mongoose.model('Publication', PublicationSchema)
