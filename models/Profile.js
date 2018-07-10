const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  website: {
    type: String
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  status: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  profession: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  education: [
    {
      degree: {
        type: String,
        required: true
      },
      specialty: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  ],
  social: {
    vk: {
      type: String
    },
    telegram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
