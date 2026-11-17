// api/models/DryCleaningOrder.js
const mongoose = require('mongoose');

const DryCleaningOrderSchema = new mongoose.Schema({
  shirts: { type: Number, required: true },
  pants: { type: Number, required: true },
  dresses: { type: Number, required: true },
  suits: { type: Number, required: true },
  pickupDate: { type: Date, required: true },
  pickupTime: { type: String, required: true },
  notes: { type: String, default: '' },
  location: { type: String, required: false },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DryCleaningOrder', DryCleaningOrderSchema);
