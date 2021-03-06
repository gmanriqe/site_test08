/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

/********* 1ero **********/

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
    }
  }

};

