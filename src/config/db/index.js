const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/my1stProject');
        console.log('connect ok ');
    } catch (error) {
        console.log('connect lỗi ');
    }
}
module.exports = { connect };
