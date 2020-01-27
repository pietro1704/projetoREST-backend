const mongoose = require('mongoose')


const uri =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://pietro:senha123@ds227865.mlab.com:27865/heroku_rzk588hg'

    
//const url = '10.40.48.163'//url mac lab

mongoose.connect(uri, {
        useNewUrlParser: true,
    },
    () => console.log('connected to db')
)