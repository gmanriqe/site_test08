/********* 8vo **********/
module.exports = function(req, res, next) {

    // le estamos diciendo a Sails qué hacer si un usuario no está autenticado, luego podemos vincular esta política con cualquiera de los controladores en la aplicación.

    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/');
};
