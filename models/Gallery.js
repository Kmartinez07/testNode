const mongosee = require('mongoose');
const Schema = mongosee.Schema;

const GalerySchema = Schema(
  {
    name: { type: String },
    description: { type: String }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongosee.model('Galery', GalerySchema);
