const express = require('express')
const CRON = require('./utils/common/cron-jobs');
const {serverConfig} = require('./config')
const apiRoutes = require('./routes')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes)

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started on server PORT : ${serverConfig.PORT}`);
    CRON()
})