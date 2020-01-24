const express = require('express')
const router = express.Router()
const noteHandler = require('./handlers/noteHandler')

router.route('/').get(noteHandler.helloWorld)

module.exports = router