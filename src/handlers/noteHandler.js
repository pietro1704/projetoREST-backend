const noteModel = require('../models/noteModel')


const helloWorld = async (req, res) => {
    res.send('Hello catapimbas')
}

const getAll = (request, h) => {
    return 'getAll'
}

const addNote = (req, res) => {
    return 'OI'
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