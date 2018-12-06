import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../../core/base.model'
import mongoosePaginate from 'mongoose-paginate'

const ClassifiedRateSchema = new auditingSchema({
  publicationId: {
    type: Schema.ObjectId,
    ref: 'Publication',
    required: true,
  },
})

ClassifiedRateSchema.pre('validate', function(next) {
  next()
})

ClassifiedRateSchema.methods = {
  /* Model Instance Methods come here */
}

/* Plug-ins */
ClassifiedRateSchema.plugin(mongoosePaginate)

export default mongoose.model('ClassifiedRate', ClassifiedRateSchema)
