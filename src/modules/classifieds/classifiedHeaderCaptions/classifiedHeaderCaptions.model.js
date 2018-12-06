import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../../core/base.model'
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

ClassifiedHeaderCaptionSchema.pre('validate', function(next) {
  this._standardize()

  next()
})

ClassifiedHeaderCaptionSchema.methods = {
  /* Model Instance Methods come here */
  _standardize() {
    this.classifiedCaption = this.classifiedCaption.toUpperCase()
  },
}

/* Plug-ins */
ClassifiedHeaderCaptionSchema.plugin(mongoosePaginate)

export default mongoose.model(
  'ClassifiedHeaderCaption',
  ClassifiedHeaderCaptionSchema
)
