const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, enum: ['available', 'in-use', 'maintenance'], default: 'available' },
});

module.exports = mongoose.model('Resource', ResourceSchema);
