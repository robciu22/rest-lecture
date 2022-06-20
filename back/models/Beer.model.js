const { Schema, model } = require('mongoose')

const BeerSchema = new Schema(
  {
    name: String,
    tagline: String,
    volume: Number,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
)

const Beer = model('Beer', BeerSchema)

module.exports = Beer
