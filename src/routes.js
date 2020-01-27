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
        path: '/',
        handler: noteHandler.getAll
    },
     {
         method: 'POST',
         path: '/',
         handler: noteHandler.addNote
     },
     {
        method: 'GET',
        path: '/{id}',
        handler: noteHandler.find
    },
    {
        method: 'DELETE',
        path: '/{id}',
        handler: noteHandler.remove
    }
]