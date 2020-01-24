const express = require('express')
const router = express.Router()
const noteHandler = require('./handlers/noteHandler')

router.route('/').get(noteHandler.helloWorld)
router.route('/all').get(noteHandler.getAll)
router.route('/').post(noteHandler.addNote)


module.exports = router