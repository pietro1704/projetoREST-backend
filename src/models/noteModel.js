const mongoose = require('mongoose')

const NoteModel = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    content: String,
    date: Date
})

module.exports = mongoose.model('Note', NoteModel)