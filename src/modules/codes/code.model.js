import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../core/base.model'
import slug from 'slug'
import validator from 'mongoose-validator'
import mongoosePaginate from 'mongoose-paginate'

const CodeSchema = new auditingSchema({
  codeIdentifier: {
    type: String,
    required: true,
  },
  codeKey: {
    type: String,
  },
  codeName: {
    type: String,
    required: true,
  },
})

CodeSchema.pre('validate', function(next) {
  this._slugify()

  next()
})

CodeSchema.methods = {
  /* Model Instance Methods come here */
  _slugify() {
    this.codeKey = slug(this.codeName.toUppCase())
    console.log('After Slugging:', this.codeKey)
  },
}

// CodeSchema.statics = {
//   /* Model Methods come here */
// }

/* Plug-ins */
ClientSchema.plugin(mongoosePaginate)

export default mongoose.model('Code', CodeSchema)
