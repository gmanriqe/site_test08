/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

/********* 1ero **********/
const bcrypt = require('bcrypt-nodejs');
module.exports = {

  attributes: {
    id:{
      primaryKey: true,
      type: 'integer',
      autoIncrement: true,
      unique: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    customToJSON: function() {
      return _.omit(this, ['password'])
    },

    //user es la variable con los datos del usuario
    beforeCreate: function(user, cb){
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(user.password, salt, null, function(err, hash){
          if(err) return cb(err);
          user.password = hash;
          return cb();
        });
      });
    }
    // Para garantizar que no devolvemos la contraseña cuando buscamos el modelo de usuario, la función customToJSON lo elimina.
  }
};

