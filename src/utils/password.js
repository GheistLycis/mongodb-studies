const bcrypt = require("bcrypt")

async function crypto(password){
    const salt = await bcrypt.genSalt()
    const encrypted = await bcrypt.hash(password, salt)
    return encrypted
}

module.exports = {crypto}