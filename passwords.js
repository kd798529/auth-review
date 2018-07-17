// const UserSchema =  new mongoose.Schema({
//     email: String,
//     password: String
// });

const bcrypt = require('bcrypt');
bcrypt.hash('asdf', 11, (err,  hash) => {
    if(err) {
        throw err;
    }
    console.log(hash);
})

const hash = '$2b$11$RNvsiVOD4N0iJDSjorvcWuJ4jIs2Qh333.clpUrOvwET/YGBrg0JG';

bcrypt.compare('asdf', hash, (err, isValid) => {
    if(err) {
        throw err;
    }
    if(isValid) {
        console.log('the password is valid');
    } else{
        console.log('the pasword is not valid');
    }
});