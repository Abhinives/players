const express = require('express');
const router = express.Router();
const Player = require('../models/Model');
router.get('/player', async(req,res)=>{
    try{
        Player.find()
        .then((details)=>{
            res.status(200).json({info: details});
        })
        .catch((err)=>{
            res.status(500).json({err: err});
        })
    }
    catch(err){
        console.log(err);
    }
    
})
router.post('/player', async (req, res) => {
    try {
        const playerData = req.body;
        delete playerData._id; // Ensure _id is not set in the request body

        const player = new Player(playerData);
        await player.save()
            .then((data) => {
                console.log('Saved');
                res.status(200).json({ 'msg': 'saved' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ 'msg': 'unable to save' });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 'msg': 'unable to save' });
    }
});


module.exports = router;