const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',},

    movieID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Movie',},

    seatNumber:{
        type: String,
        required: [true, 'Seat number is a required field'],
    },
        
    status:{
        type: String,
        required: [true, 'Status is a required field'],
        enum: ['Booked', 'Cancelled'], 
        default: 'Booked'},



}, { timestamps: true});

module.exports = mongoose.model('Booking', bookingSchema);