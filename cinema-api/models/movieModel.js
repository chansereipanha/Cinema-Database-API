const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title:{
        type: String,
        required: [true, 'Title is a required field'],
        unique: true,
        trim: true
    },
    genre:{
        type: [String],
        required: [true, 'Genre is a required field'],
    },
    duration:{ //Time format in minutes
        type: Number,
        required: [true, 'Duration is a required field'],
    },
    releaseDate:{ //yyyy-mm-dd
        type: Date,
        required: [true, 'Release date is a required field'],
    },
    description:{
        type: String,
        required: [true, 'Description is a required field'],
        trim: true
    },
    rating:{
        type: Number,
        required: [true, 'Rating date is a required field'],
    },

});

module.exports = mongoose.model('Movie', movieSchema);