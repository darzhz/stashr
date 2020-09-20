const express = require('express');
const qr = require('qrcode');
const { request, response } = require('express');
const app = express();
app.listen(3000, () => {console.log('running at port 3000')});
app.use(express.static('public'));
app.use(express.json({limit:'5mb'}))
