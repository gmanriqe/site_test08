/********* 8vo **********/
module.exports = function(req, res, next) {

    //req.isAuthenticated() es un metodo de passport que nos da passport y es el encargado de verificar si el usuario esta logeado o no. Si esta logeado devuelve true.

    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/');
};
