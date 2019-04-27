const mongosee = require('mongoose');
const Schema = mongosee.Schema;

const ImageSchema = Schema(
  {
    description: { type: String },
    filename: { type: String },
    path: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    size: { type: Number },
    gallery: { type: Schema.Types.ObjectId, ref: 'Gallery', trim: true }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongosee.model('Image', ImageSchema);
