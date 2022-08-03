var bcrypt = require('bcryptjs');

const interations = 100;
const rounds = 12;
const password="aReallySecurePassword"

for (let i = 0; i < interations; i++) {
    bcrypt.genSalt(rounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
           let h= hash;
           if(err){console.log(err)}
        });
        if(err){console.log(err)}
    });
}

