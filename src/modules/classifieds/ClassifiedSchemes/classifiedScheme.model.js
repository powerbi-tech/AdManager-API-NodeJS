import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../../core/base.model'
import mongoosePaginate from 'mongoose-paginate'

const ClassifiedRateSchema = new auditingSchema({
  publicationId: {
    type: Schema.ObjectId,
    ref: 'Publication',
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  memo: {
    type: String,
  },
  conditions: {
    freeAds: {
      type: Number,
      required: true,
    },
    paidAds: {
      type: Number,
      required: true,
    },
    maxValidDays: {
      type: Number,
      required: true,
    },
    maxWords: {
      type: Number,
      required: true,
    },
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
