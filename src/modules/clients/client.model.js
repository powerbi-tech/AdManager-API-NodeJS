import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../core/base.model'
import slug from 'slug'
import validator from 'mongoose-validator'

const ClientSchema = new auditingSchema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  mobileNumber: {
    type: String,
    trim: true,
    validate: [
      validator({
        validator: 'isNumeric',
        message: 'Please add valid mobile number',
      }),
      validator({
        validator: 'isLength',
        arguments: [10, 10],
        message: 'Mobile number should be of {ARGS[0]} digits',
      }),
    ],
    required: true,
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
