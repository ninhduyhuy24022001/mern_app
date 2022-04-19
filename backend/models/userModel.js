const mongoose = require('mongoose')

const userSchame = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'Please add a name'],
        },

        email:{
            type: String,
            required: [true, 'Please add a email'],
        },
        
        password:{
            type: String,
            required: [true, 'Please add a password'],
        },
    },
    {
        timestamp: true
    }
)

module.exports = mongoose.model('User', userSchame)