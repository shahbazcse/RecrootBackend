const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    venue: String,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  },
  date: {
    day: Number,
    month: String,
    year: Number
  },
  roles: [{
    role: String,
    requiredVolunteers: Number,
  }],
}, {
  timestamps: true,
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;