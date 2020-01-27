//importa as handlers do product.js
const noteHandler = require('./handlers/noteHandler')

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: noteHandler.helloWorld
        
    },
    {
        method: 'GET',
        path: '/all',
        handler: noteHandler.getAll
    },
     {
         method: 'POST',
         path: '/',
         handler: noteHandler.addNote
     }
]