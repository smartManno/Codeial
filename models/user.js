// for creating something that has to be store in database we have to use mongoose

const mongoose = require('mongoose');

// lets create user email password and name that will be store in db
// required  ==> without this user will not be created
// unique  ==> this should be unique in the whole database for example email cant be same for two users 
// but password can be same so that is required
// timestamp  ==> for future when user created when it updated all info needed

const userSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },

        password : {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        }        
},
    {
        timestamps: true
    }
);

// telling mongoose User is model and  'User' is collection refering to userSchema
const User = mongoose.model('User',userSchema);

module.exports = User;