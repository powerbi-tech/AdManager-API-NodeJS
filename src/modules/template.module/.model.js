import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../core/base.model'
import slug from 'slug'
import validator from 'mongoose-validator'

const tempSchema = new auditingSchema({})

tempSchema.pre('validate', function(next) {
  this._slugify()

  next()
})

tempSchema.methods = {
  /* Model Instance Methods come here */
  _slugify() {
    this.clientType = slug(this.clientType)
    console.log('After Slugging:', this.clientType)
  },
}

// tempSchema.statics = {
//   /* Model Methods come here */
// }

/* Plug-ins */
tempSchema.plugin(mongoosePaginate)

export default mongoose.model('temp', tempSchema)
