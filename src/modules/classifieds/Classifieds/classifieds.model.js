import mongoose, { Schema } from 'mongoose'
import auditingSchema from '../../core/base.model'
import mongoosePaginate from 'mongoose-paginate'

const ClassifiedInsertionSchema = new Schema({
  dateOfInsertion: {
    type: Date,
  },
  classifiedType: {
    type: String,
    enum: ['Paid', 'Free'],
    required: true,
  },
})

const ClassifiedSchema = new auditingSchema({
  ClassifiedReleaseOrderId: {
    type: Schema.ObjectId,
    ref: 'ClassifiedReleaseOrder',
    required: true,
  },
  publicationId: {
    type: Schema.ObjectId,
    ref: 'Publication',
    required: true,
  },
  clientId: {
    type: Schema.ObjectId,
    ref: 'Client',
    required: true,
  },
  classifiedInsertions: [ClassifiedInsertionSchema],
  serialNumber: {
    type: Number,
    required: true,
  },
  selectedScheme: {},
  selectedRate: {},
  classifiedDetails: {
    caption: { type: String },
    text: { type: String },
    memo: { type: String },
  },
  paymentDetails: {
    modeOfPayment: {
      type: String,
      enum: ['Cash', 'Credit', 'Cheque', 'Part_Payment', 'Advance_Payment'],
    },
    ChequeNumber: {
      type: String,
    },
    BillNumber: {
      type: String,
    },
  },
})

ClassifiedSchema.pre('validate', function(next) {
  next()
})

ClassifiedSchema.methods = {
  /* Model Instance Methods come here */
}

/* Plug-ins */
ClassifiedSchema.plugin(mongoosePaginate)

export default mongoose.model('Classified', ClassifiedSchema)
