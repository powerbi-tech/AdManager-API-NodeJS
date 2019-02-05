import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../../core/base.model'
import mongoosePaginate from 'mongoose-paginate'
import uniqueValidator from 'mongoose-unique-validator'

const ClassifiedReleaseOrderSchema = new auditingSchema({
  publicationId: {
    type: Schema.ObjectId,
    ref: 'Publication',
    required: true,
  },
  releaseOrderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  specialInstructions: {
    type: String,
  },
  dateOfCreation: {
    type: Date,
  },
})

ClassifiedReleaseOrderSchema.pre('validate', function(next) {
  next()
})

ClassifiedReleaseOrderSchema.methods = {
  /* Model Instance Methods come here */
}

/* Plug-ins */
ClassifiedReleaseOrderSchema.plugin(mongoosePaginate)

ClassifiedReleaseOrderSchema.plugin(uniqueValidator, {
  message: 'Classified Release Order  : "{VALUE}" already exists in system',
})

export default mongoose.model(
  'ClassifiedReleaseOrder',
  ClassifiedReleaseOrderSchema
)
