import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../core/base.model'
import mongoosePaginate from 'mongoose-paginate'

const ClassifiedRateSchema = new auditingSchema({})

ClassifiedRateSchema.pre('validate', function(next) {
  next()
})

ClassifiedRateSchema.methods = {
  /* Model Instance Methods come here */
}

/* Plug-ins */
ClassifiedRateSchema.plugin(mongoosePaginate)

export default mongoose.model('ClassifiedRate', ClassifiedRateSchema)
