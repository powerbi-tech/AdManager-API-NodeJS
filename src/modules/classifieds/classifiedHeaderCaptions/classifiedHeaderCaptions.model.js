import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../core/base.model'
import mongoosePaginate from 'mongoose-paginate'

const ClassifiedHeaderCaptionSchema = new auditingSchema({
  classifiedCaption: {
    type: String,
    required: true,
  },
  publicationId: {
    type: Schema.ObjectId,
    ref: 'Publication',
    required: true,
  },
})

ClientSchema.pre('validate', function(next) {
  this._standardize()

  next()
})

ClientSchema.methods = {
  /* Model Instance Methods come here */
  _standardize() {
    this.classifiedCaption = this.classifiedCaption.toUpperCase()
  },
}

// ClientSchema.statics = {
//   /* Model Methods come here */
// }

/* Plug-ins */
ClassifiedHeaderCaptionSchema.plugin(mongoosePaginate)

export default mongoose.model(
  'ClassifiedHeaderCaption',
  ClassifiedHeaderCaptionSchema
)
