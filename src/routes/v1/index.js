const express = require('express')
const { infoController } = require('../../controllers')

const router = express.Router()
const bookingRoutes = require('./booking-routes')

router.use('/booking', bookingRoutes)
router.get('/info', infoController.info)

module.exports = router