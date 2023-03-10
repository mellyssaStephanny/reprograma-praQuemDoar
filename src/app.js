require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const donorRoutes = require('./routes/donorRoutes')
const institutionRoutes = require('./routes/institutionRoutes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/reprograma-praquemdoar/donor', donorRoutes)
app.use('/reprograma-praquemdoar/institution', institutionRoutes)

module.exports = app
