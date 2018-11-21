import mongoose from 'mongoose'
const Schema = mongoose.Schema

module.exports = function (paths) {
  const auditingSchema = new Schema({
    createdBy: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    modifiedBy: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    isActive: {
      type: Boolean,
      default: true
    }
  }, { timestamps: true })

  auditingSchema.add(paths)

  return auditingSchema
}
