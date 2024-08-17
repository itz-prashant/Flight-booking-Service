const { Booking } = require('../models')
const CrudRepository = require('./crud-repositories')

class BookingRepository extends CrudRepository {
    constructor(){
        super(Booking)
    }
    
    async createBooking(data, transaction) {
        const response = await Booking.create(data, {transaction: transaction});
        return response;
    }
}

module.exports = BookingRepository