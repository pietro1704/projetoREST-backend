//importa as handlers do product.js
const noteHandler = require('./handlers/noteHandler')

module.exports = [
    {
        method: 'GET',
        path: '/helloWorld',
        handler: noteHandler.helloWorld
        
    },
    {
        method: 'GET',
        path: '/notes',
        handler: noteHandler.getAll
    },
     {
         method: 'POST',
         path: '/notes',
         handler: noteHandler.addNote
     },
     {
        method: 'GET',
        path: '/notes/{id}',
        handler: noteHandler.find
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: noteHandler.remove
    }
]