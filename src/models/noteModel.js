const mongoose = require('mongoose')

const Schema = mongoose.Schema

const NoteModel = new Schema({
    title: String,
    content: String,
    date: Date
})

module.exports = mongoose.model('Note', NoteModel)