import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../../core/base.model'
import mongoosePaginate from 'mongoose-paginate'

const ClassifiedSchemeSchema = new auditingSchema({
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

ClassifiedSchemeSchema.pre('validate', function(next) {
  next()
})

ClassifiedSchemeSchema.methods = {
  /* Model Instance Methods come here */
}

/* Plug-ins */
ClassifiedSchemeSchema.plugin(mongoosePaginate)

export default mongoose.model('ClassifiedScheme', ClassifiedSchemeSchema)
