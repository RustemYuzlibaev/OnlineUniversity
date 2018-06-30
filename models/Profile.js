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
      decription: {
        type: String
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
      decription: {
        type: String
      }
    }
  ],
  links: {
    vk: {
      type: String
    },
    telegram: {
      type: String
    },
    github: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);