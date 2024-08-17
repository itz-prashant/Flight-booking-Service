const { BookingService } = require('../services')
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse, SucessResponse} = require('../utils/common')

async function createBooking(req, res) {
    try {
        const response = await BookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noOfSeats: req.body.noOfSeats
        })
        SucessResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(SucessResponse)
    } catch (error) {
       ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}


module.exports = {
    createBooking
}