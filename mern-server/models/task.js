const mongoose = require('mongoose');

// Define the schema for the Task model
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a Mongoose model for the Task schema
module.exports= mongoose.model('Task', taskSchema);



/*
import img1 from '../assets/banner-books/magazine1.jpg'
import img2 from '../assets/banner-books/magazine2.jpg'
import img3 from '../assets/banner-books/magazine3.jpg'
import img4 from '../assets/banner-books/magazine4.jpg'
import img5 from '../assets/banner-books/magazine5.jpg'
import img6 from '../assets/banner-books/magazine6.jpg'
import img7 from '../assets/banner-books/magazine7.jpg'
import img8 from '../assets/banner-books/magazine8.jpg'
import img9 from '../assets/banner-books/magazine9.jpg'
*/