const bcrypt = require('bcrypt')

/* 
Deberan crear 2 utilidades usando bcrypt, la primera para 
encriptar la contraseña de nuestros usuarios, 
y la segunda para comparar la contraseña en texto plano con la contraseña encriptada 
*/


const hashPassword = (plainPassword) => { 
    //? PlainPassword = contraseña en texto plano
    return bcrypt.hashSync(plainPassword, 10)
}


const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}