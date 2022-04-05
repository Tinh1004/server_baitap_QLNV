const express = require('express');
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
const mongoose = require('mongoose');
MONGODB_URL = 'mongodb+srv://learnnodejs:learnnodejslearnnodejslearnnodejs@cluster0.wdwpr.mongodb.net/QLNV?retryWrites=true&w=majority';
mongoose.connect(
    MONGODB_URL,
    { useNewUrlParser: true }
)
    .then((result) => console.log("Connection"))
    .catch((error) => console.log('Error'));

const PBRoute = require('./api/routes/PB.route');
const NVRoute = require('./api/routes/NV.route');
const BaiTapRoute = require('./api/routes/baitap.route');

app.use("/v1/api/PB",PBRoute);
app.use("/v1/api/NV",NVRoute);
app.use("/v1/api/baitap",BaiTapRoute);





app.listen(PORT, () => console.log(`server started ${PORT}`))
