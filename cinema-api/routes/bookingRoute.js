var express = require('express');
var router = express.Router();
const Booking = require('../models/bookingModel');
const { default: mongoose } = require('mongoose');

//Get all bookings
router.get('/', async (req, res) => {
    try{
        const bookings = await Booking.find();
        res.status(200).json({
            status: 'working',
            data: {
                bookings
            }
        })
        }
        catch(err){
            res.status(404).json({
                status: 'failed',
                message: 'Error =>' + err,
            })
        }   
    });


//Upload bookings
router.post('/', async (req, res) => {
    try {
        const newBooking = new Booking({
            _id: new mongoose.Types.ObjectId(),
            userID: req.body.userID,  
            movieID: req.body.movieID, 
            seatNumber: req.body.seatNumber, 
            status: req.body.status, 
        });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ 
            status: 'failed',
            message: 'ERROR=> '+err
        });
    }
});

//Update bookings
router.put('/:id', async (req, res) => {
    try{
        await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(204).json({
            status: 'Updated',
        })
    }  catch(err){
        res.status(404).json({
            status: 'failed',
            message: 'ERROR=> '+err
        })
    }

});

//Delete bookings
router.delete('/:id', async (req, res) =>{
    try{
        await Booking.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'deleted',
            data: null,
        })
    } catch(err){
        res.status(404).json({
            status: 'failed',
            message: 'ERROR=> '+err
        })
    }
})


module.exports = router;