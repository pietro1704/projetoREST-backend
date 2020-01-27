const NoteModel = require('../models/noteModel')


const helloWorld = async (req, res) => {
    res.send('Hello catapimbas')
}

const getAll = async (request, h) => {
    const notes = await NoteModel.find({})
    return notes
}

const addNote = (req, res) => {
    const {
        title,
        content,
    } = req.payload

    const note = new NoteModel
    note.title = title
    note.content = content
    note.date = Date.now()

    console.log('nota-> ' + note )

    note.save()

    return res.response(note).code(201)
}

module.exports = {
    helloWorld,
    getAll,
    addNote
}