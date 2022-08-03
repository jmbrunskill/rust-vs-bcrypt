var bcrypt = require('bcryptjs');

const interations = 100;
const rounds = 12;
const password="aReallySecurePassword"

for (let i = 0; i < interations; i++) {
    var hash = bcrypt.hashSync("B4c0/\/", rounds);
}

