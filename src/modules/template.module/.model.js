import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../core/base.model'

const tempSchema = new auditingSchema({})

tempSchema.pre('validate', function(next) {
  next()
})

tempSchema.methods = {
  /* Model Instance Methods come here */
}

/* Plug-ins */
tempSchema.plugin(mongoosePaginate)

export default mongoose.model('temp', tempSchema)
