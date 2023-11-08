const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama anda'],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Silahkan isi alamat email anda'],
    }
});

module.exports = mongoose.model('users', UserSchema);
