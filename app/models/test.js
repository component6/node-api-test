const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: mongoose.Schema.Types.Decimal128,
});

mongoose.model('Test', testSchema);
