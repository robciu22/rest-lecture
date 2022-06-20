const { Schema, model } = require('mongoose')

const BarSchema = new Schema(
  {
    name: String,
    beers: [{ type: Schema.Types.ObjectId, ref: 'Beer' }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Bar = model('Bar', BarSchema)

module.exports = Bar
