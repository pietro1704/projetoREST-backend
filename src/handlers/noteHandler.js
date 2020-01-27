const noteModel = require('../models/noteModel')


const helloWorld = async (req, res) => {
    res.send('Hello catapimbas')
}

const getAll = async (request, h) => {
    console.log('entrei na funcao getALL')
    const notes = await noteModel.find({})
    console.log('notes = ' + notes)
    return notes
}

const addNote = async (req, res) => {
    res.send(req.body)
    const {
        title,
        content
    } = req.body

    const note = new noteModel
    note.title = title
    note.content = content
    note.date = Date.now()

    await note.save()

    return res.response(note).code(201)
}

module.exports = {
    helloWorld,
    getAll,
    addNote
}