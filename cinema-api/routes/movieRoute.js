var express = require('express');
var router = express.Router();
const Movie = require('../models/movieModel');
const { default: mongoose } = require('mongoose');

//Get all movies
router.get('/', async (req, res) => {
    try{
        const movies = await Movie.find();
        res.status(200).json({
            status: 'working',
            data: {
                movies
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


//Upload Movies
router.post('/', async (req, res) => {
    try{
        const newMovie = new Movie({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            genre: req.body.genre,
            duration: req.body.duration,  
            releaseDate: req.body.releaseDate,
            description: req.body.description,
            rating: req.body.rating,
        })
            await newMovie.save();
            res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ 
            status: 'failed',
            message: 'ERROR=> '+err
        });
    }
    
    
});

//Update Movies
router.put('/:id', async (req, res) => {
    try{
        await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

//Delete Movies
router.delete('/:id', async (req, res) =>{
    try{
        await Movie.findByIdAndDelete(req.params.id)
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