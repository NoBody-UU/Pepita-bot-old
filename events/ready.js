const mongoose = require('mongoose')
const config = require('../config.json')

module.exports = {
    name: 'ready',
    execute(client) {
        mongoose.connect(config.mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`El bot: ${client.user.username} esta en linea`)
    }
}