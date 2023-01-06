const express = require("express");
const router = express.Router();

const Stadium = require('../models/stadium')


router.get("/getallstadiums", async(req, res) => {


    try {
        const stadiums = await Stadium.find({})
        res.send(stadiums)
    } catch (error) {
        return res.status(400).json({message: error });
    }

});

router.post("/addstad" , async(req,res) => {
    
    try {
        const newstad = new Stadium(req.body)
        await newstad.save()
        res.send('Stadium added successfully')
    } catch (error) {
        return res.status(400).json(error)
    }
})

module.exports = router;