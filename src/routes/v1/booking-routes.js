const express = require('express')
const { BookingControllers } = require('../../controllers')
const router = express.Router()

router.post('/',
    BookingControllers.createBooking
)

router.post(
    '/payments',
    BookingControllers.makePayment
);

module.exports = router