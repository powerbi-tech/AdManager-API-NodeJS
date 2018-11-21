import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../core/base.model'
import slug from 'slug'

const ClientSchema = new auditingSchema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  clientType: {
    type: String,
    enum: ['Sub_Agent', 'Regular_Client', 'Walk_In_Client'],
    required: true,
  },
})

ClientSchema.pre('validate', function(next) {
  this._slugify()

  next()
})

ClientSchema.methods = {
  /* Model Instance Methods come here */
  _slugify() {
    this.clientType = slug(this.clientType)
    console.log('After Slugging:', this.clientType)
  },
}

ClientSchema.statics = {
  /* Model Methods come here */
}

export default mongoose.model('Client', ClientSchema)
