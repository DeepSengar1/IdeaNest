const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const uploadSchema = new Schema(
  {
    userId: ObjectId,
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    file: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Upload', uploadSchema)