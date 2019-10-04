const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

// req.query = query string params
// req.params = route params
// req.body = request body
//GET, POST, PUT, DELETE
routes.post('/store', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;