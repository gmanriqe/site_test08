/********* 7mo **********/ //ULTIMO
// Aquí es donde definimos las diferentes estrategias de pasaportes. Por ahora, solo estamos interesados ​​en la estrategia Passport-Local
const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(username, cb) {
    cb(null, username);
});

passport.deserializeUser(function(username, cb){ //username = {username:'gmanriqe'}
    console.log("deserealizacion = " + username.username);
    User.findOne(username, function(err, datos) { //username = {username:'gmanriqe'} // datos = { id: 1,email: 'gmanriqe@gmail.com',username: 'gmanriqe',password: 'gmanriqe',createdAt: '2017-12-19T17:04:21.000Z',updatedAt: '2017-12-19T17:04:21.000Z' }
    
        cb(err, username);
        console.log('deserializado!');
    });
});


passport.use(new LocalStrategy({
    usernameField: 'username',
    passportField: 'password'
},
    function(username, password, cb){
        // console.log(username);
        // console.log(password);
        User.findOne({username: username, password:password }, function(err, datos){
            console.log(datos);
            if(err) return cb(err,null);
            if(!datos) return cb(null, false, {message: 'Usuario No Existe'});
            if(datos.username) {
                var username={username: datos.username}
                // console.log('esto es username');
                // console.log(username);
                return cb(null,username,{message: 'Login Exitoso'})
            }else {
                return cb(false, null, {message: ':('});
            }
        })
}));

