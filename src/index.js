const express = require('express')
const {serverConfig, Logger} = require('./config')
const apiRoutes = require('./routes')
const app = express()

app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started on server PORT : ${serverConfig.PORT}`);
})