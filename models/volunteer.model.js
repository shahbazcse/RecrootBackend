const mongoose = require('mongoose');

const volunteerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: Number,
  isAvailable: Boolean,
  skills: [String],
  interests: [String],
  events: [mongoose.Schema.Types.ObjectId],
}, {
  timestamps: true,
});

const Volunteer = mongoose.model('volunteer', volunteerSchema);

module.exports = Volunteer;