import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../core/base.model'

const ModelSchema = new auditingSchema({})

ModelSchema.pre('validate', function(next) {
  next()
})

ModelSchema.methods = {
  /* Model Instance Methods come here */
}

/* Plug-ins */
ModelSchema.plugin(mongoosePaginate)

export default mongoose.model('temp', ModelSchema)
