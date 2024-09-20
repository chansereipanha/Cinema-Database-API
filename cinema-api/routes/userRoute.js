var express = require('express');
var router = express.Router();
const User = require('../models/usersModel');
const { default: mongoose } = require('mongoose');

//Get all users
router.get('/', async(req, res, next) => {
    try{
        const users = await User.find();
        res.status(200).json({
            status: 'working',
            data: {
                users
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

//Add new users
router.post('/', async (req, res) => {
    try{
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,  
        })
            await newUser.save();
            res.status(201).json(newUser);
    } catch(err){
        res.status(400).json({
            status: 'failed',
            message: 'ERROR=> '+err
        })
    }


});

//Update users
router.put('/:id', async (req, res) => {
    try{
        await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

//Delete users
router.delete('/:id', async (req, res) =>{
    try{
        await User.findByIdAndDelete(req.params.id)
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