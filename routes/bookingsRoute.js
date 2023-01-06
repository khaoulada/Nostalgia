const express = require("express");
const router = express.Router();

const Booking = require('../models/booking')

router.post("/bookStad", async(req,res) => {

    req.body.transactionId = '1234'
    try {
        const newbooking = new Booking(req.body)
        await newbooking.save()
        res.send('Your booking is successfull')
    } catch (error) {
        return res.status(400).json(error);
    }

});

router.get("/getallbookings", async(req, res) =>{
    try {
        const bookings = await Booking.find().populate('stadium')
        res.send(bookings)
    } catch (error) {
        return res.status(400).json(error);
    }
})

module.exports = router