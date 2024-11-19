const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const db = require('./config/db')
const kitchenFurnitures = require('./routes/KitchenFurnitureRoute')
const livingRoomFurnitures = require('./routes/LivingRoomFurnitureRoute')
const bedRoomFurnitures = require('./routes/BedRoomFurnitureRoute')
const officeFurnitures = require('./routes/OfficeFurnitureRoute')
const outdoorFurnitures = require('./routes/OutdoorFurnitureRoute')
const Users = require('./routes/UserRoute')
const Orders = require('./routes/OrderRoute')
const Auth = require('./routes/AuthRoute')
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
app.use('/kitchenFurnitures', kitchenFurnitures)
app.use('/livingRoomFurnitures', livingRoomFurnitures)
app.use('/bedRoomFurnitures', bedRoomFurnitures)
app.use('/officeFurnitures', officeFurnitures)
app.use('/outdoorFurnitures', outdoorFurnitures)
app.use('/users', Users)
app.use('/orders', Orders)
app.use('/auth', Auth)

app.listen(port, (() => console.log(`Listening on ${port}`)))