const { mongoose } = require('../db/mongoose');

const Task = mongoose.model('task', {
  title: {
    type: String,
    required: true,
    minlenght: 1,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  },
});

module.exports = { Task };
