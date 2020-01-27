const NoteModel = require('../models/noteModel')

const transformer = note => ({
    type: 'notes',
    id: note.id,
    attributes: {
        title: note.title,
        content: note.content,
        date: note.date
    },
    links: {
        self: `/${product.id}`
    }
});


const helloWorld = async (req, res) => {
    return('Hello World caralho')
}

const getAll = async (request, h) => {
    const notes = await NoteModel.find({})
    return notes.map(transformer)
}

const addNote = async (req, res) => {
    const {
        title,
        content,
    } = req.payload

    const note = new NoteModel
    note.title = title
    note.content = content
    note.date = Date.now()

    await note.save()

    return res.response(transformer(note)).code(201)
}

const find = async(req, res) =>{
    const note = await NoteModel.findByIdAndUpdate(req.params.id)
    return {data: transformer(note)}
 }
 
 const remove = async (req, res) => {
     await NoteModel.findOneAndDelete({
         _id: req.params.id
     })
     return res.response().code(204)
 }

module.exports = {
    helloWorld,
    getAll,
    addNote,
    find,
    remove
}