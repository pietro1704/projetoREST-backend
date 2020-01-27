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

const addNote = (req, res) => {
console.log('nota--------> ' + req.body)
    const note = new noteModel({
        title: req.body.title,
        content: req.body.content,
        date: Date.now()
    })


 note.save()

    return res.response(note).code(201)
}

module.exports = {
    helloWorld,
    getAll,
    addNote
}