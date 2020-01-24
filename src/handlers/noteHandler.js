const noteModel = require('../models/noteModel')


const helloWorld = async (req, res) => {
    res.send('Hello catapimbas')
}

const getAll = async (request, h) => {
    const notes = await noteModel.find({})
    console.log('entrei na funcao getALL')
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

    return res.response(product).code(201)
}

module.exports = {
    helloWorld,
    getAll,
    addNote
}