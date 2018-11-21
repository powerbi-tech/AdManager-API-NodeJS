import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const PublicationSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Publication Name is required!'],
      minlength: [3, 'Publication Name need to be longer!'],
      unique: true,
    },
  },
  { timestamps: true }
)

PublicationSchema.plugin(uniqueValidator, {
  message: 'Publication with name : "{VALUE}" already exists in system',
})

PublicationSchema.pre('validate', function(next) {
  next()
})

PublicationSchema.methods = {
/* Model Instance Methods come here */
}

PublicationSchema.statics = {
/* Model Methods come here */
}

export default mongoose.model('Publication', PublicationSchema)
