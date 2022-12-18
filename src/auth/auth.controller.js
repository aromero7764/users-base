//? email
//? password
const { findUserByEmail } = require('../users/users.controllers');
const { comparePassword } = require('../utils/crypto')


/* 
Deberas agragar una funcion que verifique las credenciales
 del usuario, recibiendo solo el email y la contraseña, 
 retornar el usuario en caso de ser exitoso, o null en caso de que no 
*/


const checkUserCredential = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        }
        return null
    } catch (error) {
        return null
    }
}


module.exports = checkUserCredential

