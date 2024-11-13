const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  dob: { type: Date },
  gender: { type: String },
  address: { type: String },
  specialization: { type: String },
  licenseNumber: { type: String },
  practiceLength: { type: String },
  affiliation: { type: String },
  identificationType: { type: String },
  identificationNumber: { type: String },
  consentHealth: { type: Boolean },
  consentDisclosure: { type: Boolean },
  agreePrivacyPolicy: { type: Boolean },
  file: { type: String }, // To store the file path or filename
  profileCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
