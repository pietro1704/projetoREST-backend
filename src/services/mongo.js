const mongoose = require('mongoose')

const url = 'mongodb+srv://pietro:senha123@jsrest-h4gjt.gcp.mongodb.net/test?retryWrites=true&w=majority'
// const url = '10.40.48.163'//url mac lab

mongoose.connect(url,
    { useNewUrlParser: true },
    () => console.log('connected to db')
)
